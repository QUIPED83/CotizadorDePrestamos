import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default function ResultCalculation(props) {
    const {capital=0, interest=0, months=0, total, errorMessage} = props;
    return(
        <View style={styles.content}>
            {total != null ? (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Resumen</Text>
                    <DataResult title={"Cantidad solicitada:"} value={`$${capital}`}></DataResult>
                    <DataResult title={"Interés:"} value={`${interest} %`}></DataResult>
                    <DataResult title={"Plazos:"} value={`${months} meses`}></DataResult>
                    <DataResult title={"Pago mensual:"} value={`${total.monthlyFee}`}></DataResult>
                    <DataResult title={"Total a pagar:"} value={`${total.totalPayable}`}></DataResult>
                </View>
            ) : null}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
};

function DataResult(props){
    const {title, value}= props;
    return(
        <View style={styles.value}>
                        <Text>{title} </Text>
                        <Text>{value}</Text>
                    </View>
    );
}

const styles = StyleSheet.create({
error:{
    textAlign:"center",
    color: "#f00",
    fontWeight:"bold",
    fontSize:20,
    marginTop:50,
},
content:{
    marginTop:30,
    marginHorizontal:40,
},
boxResult:{
    padding:30,
},
title:{
    fontSize:30,
    textAlign: 'center',
    fontWeight:'bold',
    marginBottom:30,
},
value:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20,
}
});
import React, {useState, useEffect} from "react";
import {StyleSheet, TextInput, View, Text} from "react-native"
import colors from "../utils/colors";
import { Dropdown } from 'react-native-element-dropdown';


export default function Form({ setCapital, setInterest, setMonths }){
    const [value, setValue] = useState(null);
    const data = [
      {label: '3 meses', value: 3},
      {label: '6 meses', value: 6},
      {label: '12 meses', value: 12},
      {label: '24 meses', value: 24},
    ];

return(
    <View style={styles.viewForm}>
        <View style={styles.viewInputs}>
        <TextInput 
        placeholder="Cantidad a pedir"
        keyboardType="numeric"
        style={styles.input}
        onChange={(e)=> setCapital(e.nativeEvent.text)}
        />
        <TextInput
        placeholder="Interés%"
        keyboardType="numeric"
        style={[styles.input, styles.inputPercentaje]}
        onChange={(e)=> setInterest(e.nativeEvent.text)}/>
        </View>
        <Dropdown
      style={picketSelectStyles.inputIOS}
      placeholderStyle={styles2.placeholderStyle}
      selectedTextStyle={styles2.selectedTextStyle}
      inputSearchStyle={styles2.inputSearchStyle}
      iconStyle={styles2.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Seleccione el plazo"
        searchPlaceholder="Seleccione el plazo"
        value={value}
        onChange={item => {
          setValue(item.value);
          setMonths(item.value);
        }
    }
      ></Dropdown>
    </View>
);
}

const styles = StyleSheet.create({
    viewForm:{
        position:"absolute",
        bottom: -50,
        width:"85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height: 180,
        justifyContent: "center",
    },
    viewInputs:{
        flexDirection:"row",
    },
    input:{
        height: 50,
        backgroundColor: "#fff",
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal:20,                
    },
    inputPercentaje:{
        width: "40%",
        marginLeft: 5,
    }
});

const styles2 = StyleSheet.create({
    dropdown: {
      margin: 15,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      marginLeft: 15,
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 15
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

const picketSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 13,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
      backgroundColor: '#fff',
      marginLeft: -5,
      marginRight: -5,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'grey',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30,
      backgroundColor: '#fff',
    },
  });
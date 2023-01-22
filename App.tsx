import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from "react-native"
import Form from "./src/components/Form";
import colors from "./src/utils/colors";
import Footer from "./src/components/Footer"
import ResultCalculation from "./src/components/ResultCalculation";
export default function App(){
  const [capital, setCapital] =useState();
  const [interest, setInterest] = useState();
  const [months, setMonths] = useState();
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [push, setPush] = useState(false);

  useEffect(() => {
    if(capital && interest && months && push){
    calculate();
    }else{
      reset();
    }
  }, [capital, interest, months]);


 const calculate = () => {
  reset();
    if(!capital){
      setErrorMessage("añade la cantidad que quieres solicitar");
    }else if(!interest){
      setErrorMessage("añade el interés");
    }else if(!months){
      setErrorMessage("selecciona los meses");
    }else{
      const i = interest/100;
      const fee = capital/((1 - Math.pow(i+1, -months))/i)
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * months).toFixed(2)
      })
    }
  }

  function reset(){
    setTotal(null);
    setErrorMessage("");
  }

  return(
    <>
    <StatusBar barStyle="light-content"></StatusBar>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Cotizador de prestamos</Text>
      <Form 
      setCapital={setCapital}
      setInterest={setInterest}
      setMonths = {setMonths}/>
    </SafeAreaView>
    <View>
      <ResultCalculation 
      errorMessage={errorMessage}
      capital={capital}
      interest={interest}
      months={months}
      total={total}/>
    </View>
    <Footer calculate={calculate} setPush={setPush}/>
    </> 
  )
}

const styles = StyleSheet.create({
 safeArea: {
  backgroundColor: colors.PRIMARY_COLOR,
  height: 200,
  borderBottomLeftRadius:30,
  borderBottomRightRadius:30,
  alignItems:"center",
 },
 titleApp:{
  fontSize:25,
  fontWeight:"bold",
  color: "#FFF",
  marginTop: 15,
 }
})

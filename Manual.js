import React from 'react';
import {useState} from 'react';
import { ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import { Button } from "react-native-paper";
const Password = ({status,pass}) => {
  console.log(status)
  return(
  <View style={{flex:1}}>
    {status ? <Text style={{ fontSize: 60,color:"black" }}>{pass}</Text> : null}
    </View>
  )
  }
export default function Manual(){
  const [sampleText,setSampleText]=useState("")
  const [gereatedPass,setGenerated]=useState("")
  const [currentStatus,setStatus]=useState("")
  function onsubmit(){
    var small="abcdefghijklmnopqrstuvwxyz"
    var big="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var symbol="@"
    var number="123456789"
    var sFinal=""
    for(var i=0;i<sampleText.length;i++)
    {
      var curr=sampleText.charAt(i);
      if(small.includes(curr))
      {
        let  position=Math.floor(Math.random() * small.length);
        sFinal=sFinal+small.charAt(position);
      }
      else if(big.includes(curr))
      {
        let  position=Math.floor(Math.random() * big.length);
        sFinal=sFinal+big.charAt(position);
      }
      else if(symbol.includes(curr))
      {
        let  position=Math.floor(Math.random() * symbol.length);
        sFinal=sFinal+symbol.charAt(position);
      }
      else if(number.includes(curr))
      {
        let  position=Math.floor(Math.random() * number.length);
        sFinal=sFinal+number.charAt(position);
      }
    }
    setStatus("true")
    setGenerated(sFinal)
  }
  function changeSample(sample)
  {
    console.log(sample)
    setSampleText(sample)
  }
    return(
        
      <View style={styles.sample}>
      <Text style={{fontFamily:"Inter_900Black",fontSize:20,textAlign:"center",padding:15}}>PLEASE ENTER MANUAL PASSWORD</Text>
      <TextInput
        style={styles.input}
        value={sampleText}
        onChangeText={(text)=>{changeSample(text)}}
        placeholder="  Enter Sample Password   "
        
      />
       <Button
         mode="contained"
         color="black"
         style={{width:200,borderRadius:40,marginTop:30}}
         onPress={()=>{onsubmit()}}
    >Get Password</Button>
    <Password status={currentStatus} pass={gereatedPass}/>
      </View>
    )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:5
  },
  
  sample:{
    marginTop:300,
    justifyContent:"center",
    alignItems:"center"

  }
});
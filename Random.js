import React from 'react';
import {useState} from 'react';
import { Button } from "react-native-paper";
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import {StyleSheet, Text,TextInput, View } from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';
const Password = ({status,pass}) => {
  console.log(status)
  return(
  <View style={{flex:1}}>
    {status ? <Text style={{ fontSize: 60,color:"black" }}>{pass}</Text> : null}
    </View>
  )
  }

export default function Random(){
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  const [value,setValue]=useState("")
  const [gereatedPass,setGenerated]=useState("");
  const [currentStatus,setStatus]=useState("")
  function changeText(text){
    console.log(text)
    setValue(text)
  }
  function onsubmit(){
    var small="abcdefghijklmnopqrstuvwxyz"
    var big="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var symbol="@"
    var number="123456789"
    var mix=small+big+symbol+number
    var sFinal=""
    for(var i=0;i<value;i++)
    {
      if(i==0)
      { let  position=Math.floor(Math.random() * big.length);
        sFinal=sFinal+big.charAt(position);
      }
      else
      {
      let  position=Math.floor(Math.random() * mix.length);
      sFinal=sFinal+mix.charAt(position);
      }
    }
    console.log(sFinal)
    setGenerated(sFinal)
    setStatus("true")
   
  }
    return(
        
        <View style={styles.sample}>
        <Text style={{fontFamily:"Inter_900Black",fontSize:20,textAlign:"center",padding:5}}>PLEASE ENTER LENGTH OF PASSWORD</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text)=>{changeText(text)}}
          placeholder="  Enter Password length  "
          
        />
         <Button
           mode="contained"
           color="red"
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
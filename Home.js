import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { Button } from "react-native-paper";

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
  return (
    <View style={styles.top}>
      <View style={styles.head}>
        <Text style={styles.toptext}>
          Sample Password <Text style={{color:"red",fontFamily: 'Inter_900Black'}}>Generator</Text> 
        </Text>
      </View>
      <View style={styles.bottom}>
      <Button
        mode="contained"
        color="black"
        style={{width:190,borderRadius:40}}
        onPress={() => navigation.navigate('Random')}
      >Random
      </Button>
         <Button
           mode="contained"
           color="red"
           style={{width:190,borderRadius:40,marginTop:30}}
        onPress={() => navigation.navigate('Manual')}
      >Manual </Button>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  top:{
    backgroundColor:"black",
    flex:1
  },
  head:{
    flex:1,
    backgroundColor:"white"
  },
  bottom:{
    flex:1,
    backgroundColor:"#faf3f3",
    justifyContent:"center",
    alignItems:"center"
  },
  toptext:{
    fontSize:40,
    marginTop:90,
    padding:20,
    textAlign:"center",
    fontFamily:"Inter_900Black"
  }
});


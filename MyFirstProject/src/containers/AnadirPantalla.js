import React, { useState, useEffect } from 'react';
import { Button, Text, View , TextInput, Alert,ImageBackground} from 'react-native';

import styles from '../styles/Styles';


export default function AnadirPantalla() {
 
const onpress = () =>{
  fetch('http://10.0.2.2:8080/fruits', {
    method:'POST',
    headers:{
      Accept: 'application/json','Content-Type' : 'application/json',
    },
    body:JSON.stringify({
      "name": fruit,
      "price":price  
    }),
  })
  .then((responseJson)=>{
    console.log('getting data from fectch', responseJson);
    Alert.alert("Fruta añadida correctamente");
    setFruits(null);
    setPrice(null);
  })
  .catch(error=> console.log(error));
 }

    //--------ELEMENTOS DE LA PANTALLA-------
    return (
      <ImageBackground style={ styles.imagenfondo } 
                 resizeMode='cover' 
                 source={require('../assets/frutasfondo.jpg')}>
        <View style={styles.viewfrutas}>
        <Text style={styles.enunciado} > Nombre de la fruta </Text> 
        <TextInput
            style={styles.input}
            onChangeText = {nombre => setNombre(nombre)}
        />
        <Text style={styles.enunciado}> Precio de la fruta </Text> 
        <TextInput
            style={styles.input}
            onChangeText = {precio => setPrecio(precio)}
        />
      </View>
      </ImageBackground>

  
    )
  }
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View , Button, ImageBackground} from 'react-native';

import styles from '../styles/Styles';

//useeffect= cuando se renderiza el programa se hace esa funcion y hace cambios en la pantalla.
//(Se usa para llamar a apis)
// hay que ponerle =>>>  ,[])  y así termina, si no se pone entraría en bucle. 
//Si quisieramos x veces se pondría el valor dentro de los corchetes
//el fetch sirve para llamar a las apis

//PANTALLA LISTADO
export default function FrigorificoPantalla() {
    const [fruits,setFruits]=useState(null);
    //siempre igual
    useEffect(() => {
      fetch("http://10.0.2.2:8080/fruits")
        .then(response => response.json())
        .then((responseJson) => {
          console.log('getting data from fectch', responseJson);
          setFruits(responseJson)
        })
        .catch(error => console.log(error))
    }, []);
  
    const renderizarItem = ({ item }) => (
      <View>
        <Text style={styles.letraGordita}>Nombre: {item.name}       Precio: {item.price}</Text>
  
      </View>
    );
  
    //--------ELEMENTOS DE LA PANTALLA-------
    return (
      <ImageBackground style={ styles.imagenfondo } 
                 resizeMode='cover' 
                 source={require('../assets/hielo.jpg')}>
      <View>
      <FlatList
        data={fruits}
        renderItem={renderizarItem}
        keyExtractor={item=>item.id}
      />
      </View>
  </ImageBackground>
    )
  }
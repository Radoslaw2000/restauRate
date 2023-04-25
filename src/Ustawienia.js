import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style.js';
import Konto from '../Konto.js';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";
import app from "../firestoreConfig";

export default function Ustawienia({ navigation }) {
  var notch = StatusBar.currentHeight;
  
  return (
    <View style={styles.okno}>

      <View style={{height:notch }} ></View>
      <View style={styles.head}>
        <TouchableOpacity style={{position: "absolute", paddingLeft: 20}}  onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons name="menu" size={40} color="#000" />
        </TouchableOpacity>
        <Text style={styles.appButtonText}>Ustawienia</Text>
      </View>

      <View style={styles.appSettingsTop}>
       
        <Text style={styles.appNicknameText}>{Konto.getInstance().getLogin()}</Text>
      </View>
      
      <View style={{ alignItems: 'center', width: '100%', marginTop: 250, position: "absolute"}} >

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('ZmianaHasla')} >
          <Text style={styles.appButtonText}>Zmień hasło</Text>
        </TouchableOpacity>
        
        
      </View>

    </View>
  );
}
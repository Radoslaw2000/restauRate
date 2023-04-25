import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useToast} from 'native-base';
import styles from './style.js';
import { createUserWithEmailAndPassword, getAuth, updateEmail } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";
import app from "../firestoreConfig";
import Konto from "../Konto";

export default function ZmianaEmail({ navigation }) {
  var notch = StatusBar.currentHeight;
  const [haslo, onChangeHaslo] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const toast = useToast();

  const log = (haslo, email, navigation) => {
    if (haslo === ''  || email === '') 
        toast.show( {description: "Wypełnij wszystkie pola"} )
    else{
        handleSignUp();
        navigation.goBack();
    }
  }


  const db = getFirestore(app);

  const handleSignUp = () => {
      const auth = getAuth();
      console.log(auth);

      updateEmail(auth.currentUser, email).then(() => {
        console.log("Zmienio email");
        toast.show( {description: "email został zmieniony"});
      }).catch((error) => {
        console.log("Blad logowania");
      });

          
  };




  return (
    <View style={styles.okno}>

        <View style={{height:notch }} ></View>
      <View style={styles.head}>
        <TouchableOpacity style={{position: "absolute", paddingLeft: 20}}  onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={40} color="#000" />
        </TouchableOpacity>
        <Text style={styles.appButtonText}>Zmiana e-mail</Text>
      </View>

        <View style={{ marginBottom: 150, }}></View>
        <Text style={styles.appButtonText}>Nowy e-mail</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(email) => onChangeEmail(email)} />

        <Text style={styles.appButtonText}>Hasło</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(haslo) => onChangeHaslo(haslo)}  />
        

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => log(haslo, email, navigation)} >
          <Text style={styles.appButtonText}>Potwierdź</Text>
        </TouchableOpacity>

    </View>
  );
}
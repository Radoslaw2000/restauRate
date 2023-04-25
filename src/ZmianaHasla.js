import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useToast} from 'native-base';
import styles from './style.js';
import { createUserWithEmailAndPassword, getAuth, updateEmail, updatePassword } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";
import app from "../firestoreConfig";
import Konto from "../Konto";

export default function ZmianaHasla({ navigation }) {
  var notch = StatusBar.currentHeight;
  const [haslo2, onChangeHaslo2] = React.useState('');
  const [haslo3, onChangeHaslo3] = React.useState('');
  const toast = useToast();

  const log = (haslo2, haslo3, navigation) => {
    if (haslo2 === '' || haslo3 === '') 
        toast.show( {description: "Wypełnij wszystkie pola"} )
    else if (haslo2 != haslo3)
        toast.show( {description: "Niepoprawnie powtórzone hasło"} )
    else{
      handler();
    }
  }

  const handler = () => {
    const auth = getAuth();

    updatePassword(auth.currentUser,haslo2).then(() => {
      console.log("Hasło zostało zmienione");
      toast.show({description: "Hasło zostało zmienione"});
    }).catch((error) => {
      console.log("Błąd podczas zmiany hasła: ", error);
      toast.show({description: "Błąd podczas zmiany hasła"});
      navigation.goBack();
    });
    
};

  

  return (
    <View style={styles.okno}>

        <View style={{height:notch }} ></View>
      <View style={styles.head}>
        <TouchableOpacity style={{position: "absolute", paddingLeft: 20}}  onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={40} color="#000" />
        </TouchableOpacity>
        <Text style={styles.appButtonText}>Zmiana hasła</Text>
      </View>

        <View style={{ marginBottom: 120, }}></View>

        <Text style={styles.appButtonText}>Nowe hasło</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(haslo2) => onChangeHaslo2(haslo2)} />
        
        <Text style={styles.appButtonText}>Powtórz nowe hasło</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(haslo3) => onChangeHaslo3(haslo3)} />
        

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => log(haslo2, haslo3,  navigation)} >
          <Text style={styles.appButtonText}>Potwierdź</Text>
        </TouchableOpacity>

    </View>
  );
}
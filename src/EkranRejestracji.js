import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import {useToast} from 'native-base';
import styles from './style.js';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";
import app from "../firestoreConfig";
import Konto from "../Konto";


export default function EkranLogowania({ navigation }) {
  const [login, onChangeLogin] = React.useState('');
  const [haslo, onChangeHaslo] = React.useState('');
  const [haslo2, onChangeHaslo2] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const toast = useToast();


  const db = getFirestore(app);

  const handleSignUp = () => {
      const auth = getAuth();
      console.log(auth);
      createUserWithEmailAndPassword(auth, email, haslo)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              console.log('user');
              // ...
          })
          .catch((error) => {
              console.log(error.message)
              // ..
          });

      const dataToUpload = {
        email: email,
        login: login,
      };
      addDoc(collection(db, "dane_konta"), dataToUpload).then((docRef) => 
      {
        console.log('Dodano dokument z ID: ', docRef.id);
        toast.show( {description: "Konto zostało utworzone"});
        navigation.replace("EkranLogowania");
        
      }).catch((error) => 
        {
          console.error('Błąd podczas dodawania dokumentu: ', error);
        });
          
  };

  const log = (login, haslo, haslo2, email, navigation) => {
    if (login === '' || haslo === '' || haslo2 === '' || email === '') 
        toast.show( {description: "Wypełnij wszystkie pola"} )
    else{
        handleSignUp();
    }
  }

  return (
    
    <View style={styles.okno}>
      <ScrollView style={{width:"100%"}}>
        <View style={styles.okno}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={{ marginBottom: 100, }}></View>

        <Text style={styles.appButtonText}>Nazwa konta</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(login) => onChangeLogin(login)} value={login} />

        <Text style={styles.appButtonText}>Hasło</Text>
        <TextInput secureTextEntry={true}  style={styles.appInputTextField} onChangeText={(haslo) => onChangeHaslo(haslo)} value={haslo} />

        <Text style={styles.appButtonText}>Powtórz hasło</Text>
        <TextInput secureTextEntry={true}  style={styles.appInputTextField} onChangeText={(haslo2) => onChangeHaslo2(haslo2)} value={haslo2} />

        <Text style={styles.appButtonText}>e-mail</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(email) => onChangeEmail(email)} value={email} />

        <TouchableOpacity style={styles.appButtonContainer}  onPress={() => log(login, haslo,  haslo2, email, navigation)} >
          <Text style={styles.appButtonText}>Zarejestruj</Text>
        </TouchableOpacity>
        
        </View>
      </ScrollView>
    </View>
  );
}
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import {useToast} from 'native-base';
import styles from './style.js';


import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firestoreConfig";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Konto from "../Konto";



export default function EkranLogowania({ navigation }) {
  const [email, setEmail] = useState('a@wp.pl');
  const [password, setPassword] = useState('123456');
  const toast = useToast();

  const db = getFirestore(app);
  const auth = getAuth();

  const updateInputVal = (val, prop) => {
    if (prop === 'email') setEmail(val);
    else setPassword(val);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        Konto.getInstance().setEmail(user.email);
        
        getDocs(collection(db, "dane_konta")).then((querySnapshot) => {
          const newData = [];
          querySnapshot.forEach((doc) => {
              const docData = doc.data();
              newData.push({
                  email: docData.email,
                  login: docData.login,
              });
              //rconsole.log(newData);
          });
          Konto.getInstance().setLogin(newData.filter(item => item.email === Konto.getInstance().getEmail())[0].login);
          console.log(Konto.getInstance().getLogin());
          
        });

        navigation.replace("Menu");
      }
    })

    return unsubscribe;
  }, []);

  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Zalogowano: ", user.email);
    
    })
    .catch((error) => {
      toast.show( {description: "Błędny login lub hasło"});
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  }


  return (
    <View style={styles.okno}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

        <View style={{ marginBottom: 150, }}></View>
        <Text style={styles.appButtonText}>email</Text>
        <TextInput  
          style={styles.appInputTextField} 
          value={email}
          onChangeText={(val) => updateInputVal(val, 'email')}
        />
        <Text style={styles.appButtonText}>Hasło</Text>
        <TextInput 
          secureTextEntry={true}  
          style={styles.appInputTextField} 
          value={password}
          onChangeText={(val) => updateInputVal(val, 'password')}
        />
        

        <TouchableOpacity 
          style={styles.appButtonContainer} 
          onPress={()=>userLogin()}
        >
          <Text style={styles.appButtonText}>Zaloguj</Text>
        </TouchableOpacity>

    </View>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  Alert
} from 'react-native';
import {useToast} from 'native-base';
import styles from './style.js';
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firestoreConfig";
import {getAuth} from "firebase/auth";
import Konto from "../Konto";

export default function Opinia({route, navigation }) {
  var notch = StatusBar.currentHeight;
  const [postText, setPostText] = useState('');
  const db = getFirestore(app);

  const image = route.params?.post;
  const [recordsCount, setRecordsCount] = useState(0);
  const toast = useToast();

  useEffect(() => {
    getDocs(collection(db, "opinie")).then((querySnapshot) => {
        setRecordsCount(querySnapshot.size); //zapisz ilość rekordów do zmiennej
    });
  }, []);


  const pressHanlder = async (image ) => 
    {
      const storage = getStorage();
      if(image){
        const storageRef = ref(storage,'opinia'+recordsCount+'.jpg');
        const response = await fetch(image);
        const blob = await response.blob();
        
        const uploadTask = uploadBytesResumable(storageRef, blob);
        uploadTask.on('state_changed', (snapshot) => {
            // code here
        }, (error) => 
        {console.log(error)}, () =>
        {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => 
          {
            const dataToUpload = {
                autor: Konto.getInstance().getLogin(),
                index: Konto.getInstance().getIndex(),
                obraz: downloadURL,
                opinia: postText,
            };

            addDoc(collection(db, "opinie"), dataToUpload).then((docRef) => 
            {
              console.log('Dodano dokument z ID: ', docRef.id);
              toast.show( {description: "Dodano opinie. Dziękujemy"});
              navigation.navigate("Informacje");
            }).catch((error) => 
              {
                console.error('Błąd podczas dodawania dokumentu: ', error);
              });
          });
        });

      }else{
        const dataToUpload = {
          autor: Konto.getInstance().getLogin(),
          index: Konto.getInstance().getIndex(),
          obraz: "brak",
          opinia: postText,
        };

        addDoc(collection(db, "opinie"), dataToUpload).then((docRef) => 
        {
          console.log('Dodano dokument z ID: ', docRef.id);
          toast.show( {description: "Dodano opinie. Dziękujemy"});
          navigation.navigate("Informacje");
        }).catch((error) => 
          {
            console.error('Błąd podczas dodawania dokumentu: ', error);
          });
      }
      


    }



  return (
  <View style={styles.okno}>

    <View style={{ height: notch }}></View>
    <View style={styles.head}>
      <TouchableOpacity
        style={{ position: 'absolute', paddingLeft: 20 }}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="#000" />
      </TouchableOpacity>
      <Text style={styles.appButtonText}>Napisz opinie</Text>
    </View>


    <View style={{ height: 480, alignItems: 'center' }}>
      <TextInput
        multiline
        placeholder="Napisz opinie"
        style={styles.inputModal}
        value={postText}
        onChangeText={setPostText}
      />

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.modalTileContainer}
          onPress={() => navigation.navigate('Kamera')}>
          <MaterialCommunityIcons name="camera-plus" size={60} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.modalButtonContainer}
          onPress={() => {pressHanlder(image);}}
        >
          <Text style={styles.modalButtonText}>Opublikuj</Text>
        </TouchableOpacity>
  
      </View>
    </View>

    <View 
      style={{
      width: '100%',
      alignItems: 'center',
      marginTop: 20,
    }}>
        {image && <Image source={{ uri: image }} style={{ width:200, height:200, resizeMode: 'stretch',}} />}
    </View>

  </View>
  );
}

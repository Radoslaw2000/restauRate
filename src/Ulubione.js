import * as React from 'react';
import { useState, useEffect } from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style.js';
import { FavouriteCheckbox } from './FavouriteCheckBox';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, getDoc, doc } from "firebase/firestore";
import app from "../firestoreConfig";
import Konto from "../Konto";


export default function Ulubione({ navigation }) {
  var notch = StatusBar.currentHeight;
  const [lista, setLista] = useState([]);
  const [listaUlubione, setListaUlubione] = useState([]);
  const db = getFirestore(app);



  useFocusEffect(React.useCallback(() => {
    // Kod, który będzie wykonywany przy wejściu na ekran
    getDocs(collection(db, "restaurants")).then((querySnapshot) => {
      const newData = [];
      var i = 1;
      querySnapshot.forEach((doc) => {
          
          const docData = doc.data();
          newData.push({
              id: doc.id,
              index: i,
              adres: docData.adres,
              restaurantLogo:  docData.restaurantLogo,
              restaurantName: docData.restaurantName,
          });
          //rconsole.log(newData);
          i++;
      });
      
      getDocs(collection(db, "ulubione")).then((querySnapshot) => {
        const newData2 = [];
        querySnapshot.forEach((doc2) => {
          const docData2 = doc2.data();
          newData2.push({
            index: docData2.index,
            email: docData2.email,
          });
        });
        const filteredList = newData.filter((item) => {
          for (let i = 0; i < newData2.length; i++) {
            if (newData2[i].index === item.id && newData2[i].email === Konto.getInstance().getEmail()) {
              return true;
            }
          }
          return false;
        });
        setListaUlubione(filteredList);
      });
  });


}, []));






  function Element({ id, index, restaurantLogo, restaurantName, adres }) {
    const [isChecked, setIsChecked] = useState(true);


    const addToFavorites = async () => {
      await addDoc(
        collection(db, "ulubione"),
        {
          email: Konto.getInstance().getEmail(),
          index: id,
        }
      );
    }
    
    const deleteFromFavorites = async () => {
      const querySnapshot = await getDocs(collection(db, "ulubione"));
      querySnapshot.forEach(doc => {
        if (doc.data().email === Konto.getInstance().getEmail() && doc.data().index === id) {
          id = doc.id;
        }
      });
      await deleteDoc(doc(db, "ulubione", id));
    }
    

    const handleCheckboxChange = () => {
      if (isChecked) {
        deleteFromFavorites();
      } else {
        addToFavorites();
      }
      setIsChecked(!isChecked);
    };

    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={styles.listItemButton}
          onPress={() => 
          {
            Konto.getInstance().setIndex(id);
            navigation.navigate('Informacje');
          }}
        >
          <View style={{ width: 35, alignSelf: 'center' }}>
            
          </View>

          <Image source={{uri: restaurantLogo}} style={styles.restaurantLogo} />
          <View style={{ height: 60, width: '60%', alignSelf: 'center' }}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <Text>{adres}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{alignSelf: "center"}} onPress={handleCheckboxChange} >
          {isChecked ? (
            <MaterialCommunityIcons name="heart" size={40} color="#C49450" style={{alignSelf: "center"}} />
          ) : (
            <MaterialCommunityIcons name="heart-outline" size={40} color="#C49450" style={{alignSelf: "center"}} />
          )}
        </TouchableOpacity>
      </View>
    );
  }






  return (
    <View style={styles.okno}>
      <View style={{ height: notch }}></View>
      <View style={styles.head}>
        <TouchableOpacity
          style={{ position: 'absolute', paddingLeft: 20 }}
          onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" size={40} color="#000" />
        </TouchableOpacity>
        <Text style={styles.appButtonText}>Ulubione</Text>
      </View>


      <FlatList
          data={listaUlubione}
          renderItem={({ item }) => (
            <Element
              id={item.id}
              index={item.index}
              restaurantLogo={item.restaurantLogo}
              restaurantName={item.restaurantName}
              adres={item.adres}
            />
          )}
          keyExtractor={(item) => item.id}
        />

    </View>
  );
}



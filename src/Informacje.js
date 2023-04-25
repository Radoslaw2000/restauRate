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
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style.js';
import { FavouriteCheckbox } from './FavouriteCheckBox';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, getDoc, doc } from "firebase/firestore";
import app from "../firestoreConfig";
import Konto from "../Konto";



export default function Informacje({ navigation }) {
  var notch = StatusBar.currentHeight;
  const [lista, setLista] = useState([]);
  const [opinie, setOpinie] = useState([]);
  const index = Konto.getInstance().getIndex();
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
              opis: docData.opis,
              restaurantLogo:  docData.restaurantLogo,
              restaurantName: docData.restaurantName,
              favoutiteChecked: false,
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

        newData.forEach((item) => {
          for (let i = 0; i < newData2.length; i++) {
              if (newData2[i].index === item.id && newData2[i].email === Konto.getInstance().getEmail()) {
                item.favoutiteChecked = true;
              }
            }
      });
      console.log(newData.filter(item => item.id === index));
      setLista(newData.filter(item => item.id === index));
      Konto.getInstance().setIndex(index);
      });
    });




  getDocs(collection(db, "opinie")).then((querySnapshot) => {
    const newData = [];
    querySnapshot.forEach((doc) => {
        const docData = doc.data();
        newData.push({
            id: doc.id,
            index: docData.index,
            autor: docData.autor,
            obraz:  docData.obraz,
            opinia: docData.opinia,
        });
        //rconsole.log(newData);
    });
    setOpinie(newData.filter(item => item.index === index));
  });

}, []));



  function Element({ id, index, restaurantLogo, restaurantName, adres, isFavourite }) {
    const [isChecked, setIsChecked] = useState(isFavourite);


    const addToFavorites = async () => {
      await addDoc(
        collection(db, "ulubione"),
        {
          email: Konto.getInstance().getEmail(),
          index: id,
        }
      );
      console.log("dodano do ulubionych");
    }
    
    const deleteFromFavorites = async () => {
      const querySnapshot = await getDocs(collection(db, "ulubione"));
      querySnapshot.forEach(doc => {
        if (doc.data().email === Konto.getInstance().getEmail() && doc.data().index === id) {
          id = doc.id;
        }
      });
      await deleteDoc(doc(db, "ulubione", id));
      console.log("usunięto z ulubionych");
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

  function Opinia({autor, obraz, opinia }) {
    return (
      <View style={styles.opis}>
          <View style={{width: "100%", height: 2, backgroundColor: "#C49450", marginTop: 10}}></View>
          <Text style={styles.restaurantName}>{autor}</Text>
          <Text style={styles.opinia}>{opinia}</Text>
          {obraz !== "brak" && <Image source={{uri: obraz}} style={styles.opiniaObraz} />}
      </View>
    );
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
    <Text style={styles.appButtonText}>Informacje</Text>
  </View>
  <ScrollView style={{width: "100%"}}>
    <View style={styles.okno}>

       <View style={styles.listItem}>
        <View style={styles.listItemButton}>
        {lista.map((item, id) => (
          <View key={id} style={styles.listItem}>
            <Element
              id={item.id}
              index={item.index}
              restaurantLogo={item.restaurantLogo}
              restaurantName={item.restaurantName}
              adres={item.adres}
              isFavourite={item.favoutiteChecked}
            />
          </View>
        ))}
        </View>
      </View>
      
      <View  style={styles.opis} >
        <Text style={styles.restaurantName}>Opis:</Text>

        {lista.map((item, index) => (
          <View key={index}>
            <Text>{item.opis}</Text>
          </View>
        ))}

      </View>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => navigation.navigate('Opinia')}>
        <Text style={styles.appButtonText}>Napisz opinie</Text>
      </TouchableOpacity>
      <View style={{ height: 30 }}></View>
      <View  style={styles.opis} >
        <Text style={styles.restaurantName}>Opinie:</Text>
        {opinie.map((item, id) => (
          <View key={id}>
            <Opinia 
                autor={item.autor}
                obraz={item.obraz}
                opinia={item.opinia}
              ></Opinia>
          </View>
        ))}

      </View>
    </View>
    </ScrollView>
</View>
  );
}

import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useToast} from 'native-base';
import styles from './style.js';

export default function ZmianaLoginu({ navigation }) {
  var notch = StatusBar.currentHeight;
  const [haslo, onChangeHaslo] = React.useState('');
  const [login, onChangeLogin] = React.useState('');
  const toast = useToast();

  const log = (haslo, login, navigation) => {
    if (haslo === ''  || login === '') 
        toast.show( {description: "Wypełnij wszystkie pola"} )
    else{
        navigation.goBack();
    }
  }
  return (
    <View style={styles.okno}>

        <View style={{height:notch }} ></View>
      <View style={styles.head}>
        <TouchableOpacity style={{position: "absolute", paddingLeft: 20}}  onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={40} color="#000" />
        </TouchableOpacity>
        <Text style={styles.appButtonText}>Zmiana loginu</Text>
      </View>

        <View style={{ marginBottom: 150, }}></View>
        <Text style={styles.appButtonText}>Nowy Login</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(login) => onChangeLogin(login)} />

        <Text style={styles.appButtonText}>Hasło</Text>
        <TextInput  style={styles.appInputTextField} onChangeText={(haslo) => onChangeHaslo(haslo)}  />
        

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => log(haslo, login, navigation)} >
          <Text style={styles.appButtonText}>Potwierdź</Text>
        </TouchableOpacity>

    </View>
  );
}
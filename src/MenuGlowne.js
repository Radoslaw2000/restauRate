import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';

export default function EkranLogowania({ navigation }) {
  const auth = getAuth();
  
  const handleSingOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("EkranStartowy");
    })
    .catch(error => alert(error.message));
  }



  return (
    <View style={styles.okno}>
      <Image source={require('../assets/logo.png')} style={styles.logoMenuG} />
      <View style={{marginTop: 50, height: 420, right: 40}}>
        <View style={styles.appMenuG}>
          <TouchableOpacity style={styles.appTileContainerL} onPress={() => navigation.navigate('Wpoblizu')} >
            <MaterialCommunityIcons name="google-maps" size={74} color="#fff" style={{alignSelf: "center"}} />
            <Text style={styles.appTileText}>W pobliżu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appTileContainerR} onPress={() => navigation.navigate('Ulubione')} >
            <MaterialCommunityIcons name="heart-outline" size={74} color="#fff" style={{alignSelf: "center"}} />
            <Text style={styles.appTileText}>Ulubione</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appMenuG}>
          <TouchableOpacity style={styles.appTileContainerL}>
            <MaterialCommunityIcons name="podium" size={74} color="#fff" style={{alignSelf: "center"}} />
            <Text style={styles.appTileText}>Ranking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appTileContainerR} onPress={() => navigation.navigate('Wyszukaj')} >
            <MaterialCommunityIcons name="magnify" size={74} color="#fff" style={{alignSelf: "center"}} />
            <Text style={styles.appTileText}>Wyszukaj</Text>
          </TouchableOpacity>
        </View>

       <View style={styles.appMenuG}>
          <TouchableOpacity style={styles.appTileContainerL} onPress={() => navigation.navigate('Ustawienia')} >
            <MaterialCommunityIcons name="cog" size={74} color="#fff" style={{alignSelf: "center"}} />
            <Text style={styles.appTileText}>Ustawienia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appTileContainerR} onPress={handleSingOut} >
            <MaterialCommunityIcons name="logout" size={74} color="#fff" style={{alignSelf: "center"}} />
            <Text style={styles.appTileText}>Wyloguj</Text>
          </TouchableOpacity>
        </View>
    </View>
  </View>
  );
}
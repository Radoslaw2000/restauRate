import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style.js';

export default function EkranStartowy({ navigation }) {
  return (
    <View style={styles.okno}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.replace('EkranLogowania')} >
          <Text style={styles.appButtonText}>Zaloguj</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainer } onPress={() => navigation.navigate('EkranRejestracji')} >
          <Text style={styles.appButtonText}>Zarejestruj</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
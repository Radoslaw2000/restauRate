import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import app from "../firestoreConfig";
import styles from './style.js';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Konto from "../Konto";

export default function Test({ navigation }) {
  const auth = getAuth();

  return (
    <View style={styles.okno}>
        <Text style={styles.appButtonText}>aaaa</Text>
        <Text style={styles.appButtonText}>aaaa</Text>
        <Text style={styles.appButtonText}>aaaa</Text>
        <Text style={styles.appButtonText}>aaaa</Text>
    </View>
  );
}
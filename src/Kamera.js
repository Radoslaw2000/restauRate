import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './style.js';
import { getFirestore, collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";
import app from "../firestoreConfig";
import {getAuth} from "firebase/auth";

export default function Kamera({navigation}) {
  var notch = StatusBar.currentHeight;
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);
  const db = getFirestore(app);
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.email)

  useEffect(() => {
      (async () => {
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraStatus.status === 'granted');
      })();
  }, []);

  const takePicture = async () => {
      if (cameraRef.current) {
          const data = await cameraRef.current.takePictureAsync();
          setImage(data.uri);
      }
  };

  const toggleShowImage = () => {
      setShowImage(!showImage);
  };












  return (
  <View style={styles.okno}>

    <View style={{ height: notch }}></View>

    <View style={{ height: "100%",width:"100%", alignItems: 'center' }}>
      
      
      <Camera
          style={{ height: "100%", width:"100%" }}
          ref={cameraRef}
          type={Camera.Constants.Type.back}>
        <TouchableOpacity
          style={styles.backArrowKamera}
          onPress={() => {
            navigation.navigate({
              name: 'Opinia',
              params: {post:  image} ,
              merge: true,
            });
          }}>
          <MaterialCommunityIcons name="arrow-left" size={40} color="#fff" />
        </TouchableOpacity>

        <View
          style={{
            width: '100%', height:90, position: "absolute", bottom: 40, flexDirection: 'row',
          }}>

          {image && <Image source={{ uri: image }} style={{ width:90, height:90, resizeMode: 'stretch', position: "absolute", left:10 }} />}
          <TouchableOpacity
            style={styles.modalTileContainerKamera}
            onPress={() => takePicture()}>
            <MaterialCommunityIcons name="camera-plus" size={60} color="#fff" />
          </TouchableOpacity>

        </View>

      </Camera>

    </View>
  </View>
  );
}
  
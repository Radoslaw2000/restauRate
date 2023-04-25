import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from './src/style.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EkranLogowania from './src/EkranLogowania.js';
import EkranRejestracji from './src/EkranRejestracji';
import EkranStartowy from './src/EkranStartowy';
import MenuGlowne from './src/MenuGlowne';
import Wpoblizu from './src/WPoblizu';
import Ulubione from './src/Ulubione';
import Ranking from './src/Ranking';
import Wyszukaj from './src/Wyszukaj';
import Ustawienia from './src/Ustawienia';
import ZmianaLoginu from './src/ZmianaLoginu';
import ZmianaHasla from './src/ZmianaHasla';
import ZmianaEmail from './src/ZmianaEmail';
import Informacje from './src/Informacje';
import Kamera from './src/Kamera';
import Opinia from './src/Opinia';
import Test from './src/Test';

import {NativeBaseProvider} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="EkranStartowy" component={EkranStartowy} options={{headerShown: false}} />
      <Stack.Screen name="EkranLogowania" component={EkranLogowania} options={{headerShown: false}} />
      <Stack.Screen name="EkranRejestracji" component={EkranRejestracji} options={{headerShown: false}} />
      <Stack.Screen name="ZmianaLoginu" component={ZmianaLoginu} options={{headerShown: false}} />
      <Stack.Screen name="ZmianaHasla" component={ZmianaHasla} options={{headerShown: false}} />
      <Stack.Screen name="ZmianaEmail" component={ZmianaEmail} options={{headerShown: false}} />
      <Stack.Screen name="Menu" component={MyDrawer} options={{headerShown: false}} />
      <Stack.Screen name="Kamera" component={Kamera} options={{headerShown: false}} />
      <Stack.Screen name="Informacje" component={Informacje} options={{headerShown: false}} />
      <Stack.Screen name="Opinia" component={Opinia} options={{headerShown: false}} />
      
    </Stack.Navigator>
  );
}


const CustomDrawer = (props) => {
  var notch = StatusBar.currentHeight;
  return (
    <View style={{flex:1, backgroundColor: '#E1D5C9', alignContent: "center", marginTop: notch}}>
      <DrawerContentScrollView  {...props}>
        <Image source={require('./assets/logo.png')} style={styles.logoDrawer} />
        <DrawerItemList {...props} />

      </DrawerContentScrollView>
    </View>
  );
}


function MyDrawer() {
  return (

    <Drawer.Navigator
      useLegacyImplementation
       drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="MenuGlowne" component={MenuGlowne} options={{title: 'Strona główna', headerShown: false, swipeEnabled: false}} />
      <Drawer.Screen name="Wpoblizu" component={Wpoblizu} options={{ title: 'W pobliżu', headerShown: false }}  />
      <Drawer.Screen name="Ulubione" component={Ulubione} options={{headerShown: false}} />
      {/*<Drawer.Screen name="Ranking" component={Ranking} options={{headerShown: false}} />*/}
      <Drawer.Screen name="Wyszukaj" component={Wyszukaj} options={{headerShown: false}} />
      <Drawer.Screen name="Ustawienia" component={Ustawienia} options={{headerShown: false}} />
      
      {/*<Drawer.Screen name="Wyloguj" component={EkranLogowania} options={{headerShown: false, swipeEnabled: false}} /> */}
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



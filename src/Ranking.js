import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StatusBar, FlatList, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style.js';

const ListButton = ({param}) => (
    <View style={styles.listItemButton} >
      <View style={{width:35, alignSelf: "center"}}>
      <Text style={styles.appButtonText} > {param}  </Text>
      </View>

      <Image source={require( '../assets/restaurantLogo1.png')} style={styles.restaurantLogo} />
      <View style={{height: 60, width: "60%", alignSelf: "center"}}>
      
          <Text style={styles.restaurantName}>McDonald's</Text>
          <Text>Kielce al. Tysiąclecia...</Text>
      </View>
    </View>
);


const ListItem = ({param}) => (
  <View style={styles.listItem}>
    <TouchableOpacity style={styles.listItemButton}  >
      <ListButton param={param} />
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf: "center"}} >
            <MaterialCommunityIcons name="heart-outline" size={40} color="#C49450" style={{alignSelf: "center"}} />
    </TouchableOpacity>
  </View>
);

export default function Ranking({ navigation }) {

  var notch = StatusBar.currentHeight;
  return (
    <View style={styles.okno}>

      <View style={{height:notch }} ></View>
      <View style={styles.head}>
        <TouchableOpacity style={{position: "absolute", paddingLeft: 20}}  onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons name="menu" size={40} color="#000" />
        </TouchableOpacity>
        <Text style={styles.appButtonText}>Ranking restauracji</Text>
      </View>
      
     <ScrollView style={{width: "100%"}}>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"1."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"2."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>
        
        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"3."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"4."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"5."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"6."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"7."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"8."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"9."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"10."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"11."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>

        <View style={styles.listItem}>
          <TouchableOpacity style={styles.listItemButton} onPress={() => navigation.navigate('Informacje')} >
            <ListButton param={"12."} />
          </TouchableOpacity>
          <Image source={require( '../assets/ocena.png')} style={styles.restaurantOcena} />
        </View>


      </ScrollView>

    </View>
  );
}









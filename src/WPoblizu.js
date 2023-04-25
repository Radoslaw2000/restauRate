import * as React from 'react';
import { Component } from 'react';
import MapView from 'react-native-maps';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import styles from './style.js';

export default class WPoblizu extends Component {
  state = {
    location: null,
    geocode: null,
    errorMessage: '',
  };

  componentDidMount() {
    this.getLocationAsync();
  }
  getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
  };






  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };
  render() {
    const { location, geocode, errorMessage } = this.state;

    if (!location) {
      return (
        <View style={styles.okno}>
          <View style={{ height: StatusBar.currentHeight }}></View>
          <View style={styles.head}>
            <TouchableOpacity
              style={{ position: 'absolute', paddingLeft: 20 }}
              onPress={() => this.props.navigation.openDrawer()}>
              <MaterialCommunityIcons name="menu" size={40} color="#000" />
            </TouchableOpacity>
            <Text style={styles.appButtonText}>Restauracje w pobliżu</Text>
          </View>
          <Text>
            Brak dostępu do lokalizacji
          </Text>

        </View>
      );
    }
    else

    return (
      <View style={styles.okno}>
        <View style={{ height: StatusBar.currentHeight }}></View>
        <View style={styles.head}>
          <TouchableOpacity
            style={{ position: 'absolute', paddingLeft: 20 }}
            onPress={() => this.props.navigation.openDrawer()}>
            <MaterialCommunityIcons name="menu" size={40} color="#000" />
          </TouchableOpacity>
          <Text style={styles.appButtonText}>Restauracje w pobliżu</Text>
        </View>

        <MapView
          style={{ flex: 1, width: '100%', height: '100%' }}
          initialRegion={{
            latitude: location ? location.latitude : 0,
            longitude: location ? location.longitude : 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
        </MapView>
      </View>
    );
  }
}

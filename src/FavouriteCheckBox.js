import { MaterialCommunityIcons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

export function FavouriteCheckbox({ checked, onPress, size }) {
  return (
    <TouchableOpacity style={{alignSelf: "center"}} onPress={onPress} >
        {checked ? (
          <MaterialCommunityIcons name="heart" size={size} color="#C49450" style={{alignSelf: "center"}} />
        ) : (
          <MaterialCommunityIcons name="heart-outline" size={size} color="#C49450" style={{alignSelf: "center"}} />
        )}
    </TouchableOpacity>
  );
}
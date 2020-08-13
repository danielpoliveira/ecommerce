import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const Favorite: React.FC = props => {
  const  { isEnabled } = props;
  if (isEnabled){
    return (
      <TouchableOpacity style={styles.container} >
          <IonicIcons name="heart-outline" size={22} color="#FFFFFF" />
      </TouchableOpacity>
    );
  }else{
    return(
      <TouchableOpacity style={styles.container}>
        <IonicIcons name="heart-sharp" size={22} color="#EF3651" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: 52,
      height: 52,
      backgroundColor: '#2A2C36',
      borderRadius: 52,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#EF3651',
      shadowOpacity: 0.35,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 8,
      elevation: 5,
    },
  });

  export default Favorite;
  
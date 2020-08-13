import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const Camera: React.FC = () => {
  return (
    <View style={styles.container} >
        <IonicIcons name="camera" size={24} color="#FFFFFF" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: 52,
      height: 52,
      backgroundColor: '#EF3651',
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

  export default Camera;
  
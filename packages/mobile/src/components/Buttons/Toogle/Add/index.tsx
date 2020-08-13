import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const Add: React.FC = () => {
  return (
    <View style={styles.container} >
        <IonicIcons name="add" size={24} color="#1E1F28" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: 36,
      height: 36,
      backgroundColor: '#F6F6F6',
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

  export default Add;
  
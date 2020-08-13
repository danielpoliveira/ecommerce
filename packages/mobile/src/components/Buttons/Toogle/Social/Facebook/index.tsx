import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Facebook: React.FC = () => {
  return (
    <View style={styles.container} >
        <Svg style={{
          marginRight: 3
        }} width="24" height="24" >
          <Path
            fill="#3B5998"
            d="M24 22.5C24 23.328 23.328 24 22.5 24H1.5C0.672 24 0 23.328 0 22.5V1.5C0 0.672 0.672 0 1.5 0H22.5C23.328 0 24 0.672 24 1.5V22.5Z"
          />
          <Path
            fill="white"
            d="M16.5 24V15H19.5L20.25 11.25H16.5V9.75C16.5 8.25 17.2515 7.5 18.75 7.5H20.25V3.75C19.5 3.75 18.57 3.75 17.25 3.75C14.4938 3.75 12.75 5.91075 12.75 9V11.25H9.75V15H12.75V24H16.5Z"
          />
        </Svg>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: 92,
      height: 64,
      backgroundColor: '#FFFFFF',
      borderRadius: 24,
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

  export default Facebook;
  
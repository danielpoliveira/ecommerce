import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import _Checkbox from '@react-native-community/checkbox';


const Checkbox: React.FC = props => {
  const { placeholder, color, text } = props;

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (

    <View style={styles.container}>
      <_Checkbox
        tintColors={{ true: color, false: '#ABB4BD' }}
        style={styles.checkbox}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />

      { text && (<Text style={styles.text}>{text}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    

  },
  checkbox: {
    color: '#ABB4BD',
  },

  text: {
    fontFamily: 'Poppins-Regular',
    color: '#F6F6F6',
    
    

    fontSize: 15,
  }
});

export default Checkbox;
import React, { useState } from 'react';
import { View, Text, Switch as _Switch, StyleSheet, } from 'react-native';

const Switch: React.FC = props => {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (

    <View style={styles.container}>
      <_Switch
        trackColor={{ false: "#ABB4BD1A", true: "#ABB4BD1A" }}
        thumbColor={isEnabled ? "#55D85A" : "#ABB4BDB3"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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

export default Switch;
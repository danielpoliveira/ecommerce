import React, { useState } from 'react';
import { View, Switch as _Switch, StyleSheet, } from 'react-native';

import { useTheme } from '@contexts/theme';

const Switch = props => {
  const { change } = props;
  const { theme } = useTheme();

  const [isEnabled, setIsEnabled] = useState(theme.mode === 'dark');

  const toggleSwitch = () => {
    change();

    setIsEnabled(previousState =>
      !previousState
    );
  }
  
  return (
    <View style={styles(theme).container}>
      <_Switch
        trackColor={{ false: '#ABB4BD', true: "#9B9B9B" }}
        thumbColor={isEnabled ? "#55D85A" : "#ABB4BD"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = theme => StyleSheet.create({
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
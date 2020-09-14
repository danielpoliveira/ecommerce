import React from 'react';
import {
  View, Text, StatusBar, ScrollView, StyleSheet,
} from 'react-native';
import CategoryCard from '@components/CategoryCard';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from '@contexts/theme';

const Tab = createMaterialTopTabNavigator();

const Women: React.FC = () => {

  const { theme } = useTheme();

  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>

        <View style={[{ backgroundColor: theme.primary }, styles.summerSalesContainer]}>
          <View style={styles.summerSalesTextView}>
            <Text style={styles.summerSalesTitle}>SUMMER SALES</Text>
            <Text style={styles.summerSalesDescription}>Up to 50% off</Text>
          </View>
        </View>

        <CategoryCard name="new" />
        <CategoryCard name="clothes" />
        <CategoryCard name="shoes" />
        <CategoryCard name="acessories" />

      </View>
    </ScrollView>
  );
}

const Men: React.FC = Women;
const Kids: React.FC = Women;

const Shop: React.FC = (props) => {

  const { theme } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        
        activeTintColor: theme.textColor,
        inactiveTintColor: theme.textColorSecundary,
        style: {
          backgroundColor: undefined,
        },

        labelStyle: {
          fontWeight: "bold"
        },

        indicatorStyle: {
          backgroundColor: '#EF3651',
          height: 3,
        },
      }}

      style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Tab.Screen name="Women" component={Women} />
      <Tab.Screen name="Men" component={Men} />
      <Tab.Screen name="Kids" component={Kids} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  summerSalesContainer: {
    width: 343,
    height: 100,

    marginVertical: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  summerSalesTextView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  summerSalesTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#F6F6F6',
  },

  summerSalesDescription: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#F6F6F6',
  },

});

export default Shop;

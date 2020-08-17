import React from 'react';
import {
  View, Text, StatusBar, ScrollView, StyleSheet,
} from 'react-native';
import CategoryCard from '@components/CategoryCard';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Women: React.FC = () => (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>

        <View style={styles.summerSalesContainer}>
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

const Men: React.FC = Women;
const Kids: React.FC = Women;

const Shop: React.FC = (props) => (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F5F5F5',
        inactiveTintColor: '#ABB4BD',
        style: {
          backgroundColor: undefined,
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

const styles = StyleSheet.create({
  summerSalesContainer: {
    width: 343,
    height: 100,
    backgroundColor: '#FF3E3E',
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

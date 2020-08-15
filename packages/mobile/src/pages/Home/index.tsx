import React from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';

import banner from '@images/homescreen-banner.png';

import ButtonPrimarySm from '@components/Buttons/Small/Primary';

import ProductCardMain from '@components/ProductCard/Main';

const Home: React.FC = () => (
  <ScrollView >
    <ImageBackground 
      source={banner} 
      style={styles.imageBackground}
    >
      <View style={styles.textImageBackgroundContainer} >

        <View style={{marginVertical: 18}} >
          <Text style={styles.textImageBackgroundTitle}>Fashion {'\n'}sale</Text>
        </View>

        <View>
          <ButtonPrimarySm placeholder="Check" />
        </View>

      </View>
    </ImageBackground>
    
    <View style={{ flex:1, paddingHorizontal: 13,}} >
      <View style={{
        marginTop: 30,
         flexDirection: "row", alignItems: "center", justifyContent: "space-between",
        
    }} >
        <Text style={{
          fontSize:34,
          fontFamily: 'Poppins-Bold',
          lineHeight: 60,
          color: '#f6f6f6',
        }} >New</Text>
        <Text style={{
          fontSize: 12,
          lineHeight: 16,
          fontFamily: 'Poppins-Regular',
          color: '#f6f6f6',
        }}>View all</Text>
      </View>
      <View>
        <Text style={{
          color: '#ABB4BD',
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
          lineHeight: 16,
        }}>You’ve never seen it before!</Text>
      </View>
    </View>

    <ScrollView horizontal>
      <ProductCardMain />
      <ProductCardMain />
      <ProductCardMain />
      <ProductCardMain end />
    </ScrollView>
    
  </ScrollView>
);

const styles = StyleSheet.create({
  imageBackground: {
    height: 450,
    width: '100%'
  },

  textImageBackgroundContainer: {
    marginTop: '60%', 
    paddingHorizontal: 10,
  },

  textImageBackgroundTitle: {
    lineHeight: 60,
    color: '#F6F6F6',
    fontFamily: 'Poppins-Black', 
    fontSize: 48,
  },
});

export default Home;
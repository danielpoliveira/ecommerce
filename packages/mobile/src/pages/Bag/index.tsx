import React from 'react';
import {
  View, Text, StatusBar, ScrollView,
} from 'react-native';
import ProductCartBag from '@components/ProductCard/Bag';
import Title from '@components/Title';

const Bag: React.FC = (props) => (

  <View style={{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
  }}>
    <Title placeholder="My Bag" />

    <ScrollView showsVerticalScrollIndicator={false}>
      <ProductCartBag />
      <ProductCartBag />
      <ProductCartBag />
      <ProductCartBag />
      <ProductCartBag end />
    </ScrollView>
  </View>
);

export default Bag;

import React from 'react';
import { View, Text } from 'react-native';
import ProductCartBag from '@components/ProductCard/Bag';

const Bag: React.FC = (props) => (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }} >
      <ProductCartBag/>
    </View>
);

export default Bag;

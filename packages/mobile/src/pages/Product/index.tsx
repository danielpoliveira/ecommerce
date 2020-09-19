import React, { useState } from 'react';
import { View, ScrollView, Text, Image, Dimensions } from 'react-native';

import { useTheme } from '@contexts/theme';

import FavoriteIcon from '@components/Buttons/Toogle/Favorite';
import Dropdown from '@components/Dropdown';

import { Description, MoreProducts, Option, Title } from './styles';
import Primary from '@components/Buttons/Big/Primary';
import ProductCardMain from '@components/ProductCard/Main';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import img1 from '@images/vestido.png';
import img2 from '@images/vestido-2.png';

const { width } = Dimensions.get('window');
//const height = width * 1; //60%

const images = [img1, img2];

const Product = props => {
  const { navigation } = props;
  const { theme } = useTheme();

  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    if (slide !== active)
      setActive(slide);
  }

  return (<>
    <ScrollView>
      <View
        style={{
          backgroundColor: theme.textColorSecundary,
          width,
        }}
      >
        <ScrollView
          onScroll={change}
          pagingEnabled
          horizontal style={{ width, }}
          showsHorizontalScrollIndicator={false}
        >
          {
            images.map((image, index) => <Image
              key={index}
              source={image}
              style={{
                flex: 1,
                width,
                height: 390,
                resizeMode: "contain",
              }}
            />)
          }
        </ScrollView>
        <View style={{ flexDirection: 'row', alignSelf: 'center', bottom: 0, position: 'absolute' }}>
          {
            images.map((undefined, index) =>
              <FontAwesome
                name="circle"
                size={12.5}
                style={{ margin: 3 }}
                color={index === active ? theme.primary : theme.textColorSecundary}
              />
            )
          }
        </View>
      </View>

      <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: "space-between", paddingVertical: 20 }} >
        <Dropdown placeholder="Size" />
        <Dropdown placeholder="Color" />
        <FavoriteIcon />
      </View>

      <View style={{ marginHorizontal: 15 }} >
        <Title />
        <Description />
      </View>

      <View style={{ paddingVertical: 20 }}>
        <Option placeholder="item details" />
        <Option placeholder="shipping info" />
        <Option placeholder="support" end />
      </View>

      <View style={{ marginHorizontal: 15 }} >
        <MoreProducts />
      </View>

      <ScrollView horizontal>
        <ProductCardMain navigation={navigation} tagInfo="new" active />
        <ProductCardMain navigation={navigation} />
        <ProductCardMain navigation={navigation} />
        <ProductCardMain navigation={navigation} />
        <ProductCardMain navigation={navigation} end />
      </ScrollView>
    </ScrollView>

    <View style={{ paddingVertical: 15, bottom: 0, alignItems: 'center', justifyContent: 'center' }} >
      <Primary placeholder="Add to cart" />
    </View>
  </>);
}

export default Product;
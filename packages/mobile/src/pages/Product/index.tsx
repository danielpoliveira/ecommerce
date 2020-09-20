import React, { useRef, useState, useLayoutEffect } from 'react';
import { View, ScrollView, Text, Image, Dimensions, FlatList,  } from 'react-native';
import Animated from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from 'reanimated-bottom-sheet';

import { useTheme } from '@contexts/theme';

import FavoriteIcon from '@components/Buttons/Toogle/Favorite';
import Primary from '@components/Buttons/Big/Primary';
import TagOrdinary from '@components/Tags/Ordinary';
import Dropdown from '@components/Dropdown';
import ProductCardMain from '@components/ProductCard/Main';

import { Description, MoreProducts, Option, Title } from './styles';

import img1 from '@images/vestido.png';
import img2 from '@images/vestido-2.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
//const { height } = Dimensions.get('window');
//const height = width * 1; //60%

const images = [img1, img1, img2, img1, img2];

interface ProductProps {
  navigation: any;
};

const tags = [
  { id: 0, value: <TagOrdinary placeholder="xs" /> },
  { id: 1, value: <TagOrdinary placeholder="s" /> },
  { id: 2, value: <TagOrdinary placeholder="m" /> },
  { id: 3, value: <TagOrdinary placeholder="l" /> },
  { id: 4, value: <TagOrdinary placeholder="xl" /> },
];

const Product = ({ navigation }: ProductProps) => {
  const { theme } = useTheme();
  const sheetRef = useRef(null);

  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginHorizontal: 15,
          }}
        >
          <MaterialIcons name="arrow-back" size={20} color={theme.textColor} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginHorizontal: 15,
          }}
        >
          <MaterialIcons name="share" size={20} color={theme.textColor} />
        </TouchableOpacity>
      )
    })
  }, [navigation]);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    if (slide !== active)
      setActive(slide);
  }

  const renderTags = ({ item, index }) => {
    return (
      <>
        <View style={{
          marginBottom: 15,
          alignItems: "center",
          flexGrow: 1, flexBasis: 0,
        }} >
          {item.value}
        </View>

        {index === tags.length - 1 &&
          <View
            style={{
              marginBottom: 15,
              alignItems: "center",
              flexGrow: 1, flexBasis: 0,
            }}
          />
        }
      </>
    );
  }

  const renderContent = () => {

    return (
      <View
        style={{
          backgroundColor: theme.background,
          padding: 16,
          height: 400,
        }}
      >
        <View>

          <View style={{ paddingBottom: 20 }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 22,
                color: theme.textColor,
                textAlign: 'center',
              }}
            >Select Size</Text>
          </View>

          <View style={{ paddingVertical: 15 }} >
            <FlatList
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              data={tags}
              renderItem={renderTags} />
          </View>

          <View>
            <Option placeholder="size info" end />
          </View>

        </View>
      </View>
    );
  }
  let fall = new Animated.Value(1)

  const renderHeader = () => (
    <View style={{
      top: 1,
      backgroundColor: theme.background,
      paddingTop: 20,
      borderTopLeftRadius: 34,
      borderTopRightRadius: 34,
    }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{
          width: 50,
          height: 8,
          borderRadius: 4,
          backgroundColor: theme.textColorSecundary,
          marginBottom: 10,
        }}>

        </View>
      </View>
    </View >
  )
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
                key={index}
                name="circle"
                size={10}
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

      <ScrollView style={{ marginBottom: 100 }} horizontal showsHorizontalScrollIndicator={false} >
        <ProductCardMain navigation={navigation} tagInfo="new" active />
        <ProductCardMain navigation={navigation} />
        <ProductCardMain navigation={navigation} />
        <ProductCardMain navigation={navigation} />
        <ProductCardMain navigation={navigation} end />
      </ScrollView>
    </ScrollView>


    <BottomSheet
      enabledHeaderGestureInteraction={true}
      ref={sheetRef}
      snapPoints={[0, 200, 400]}
      renderHeader={renderHeader}
      initialSnap={0}
      callbackNode={fall}
      renderContent={renderContent} />

    <View
      //onTouchEnd={() => sheetRef.current.snapTo(350)}
      style={{
        backgroundColor: theme.background,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        width: '100%',

        position: "absolute", bottom: 0,
      }}
    >
      <Primary placeholder="Add to cart" handlerSubmitCart={() => sheetRef.current.snapTo(350)} />
    </View>

  </>);
}

export default Product;
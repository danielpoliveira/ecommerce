import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';

import Hotlabel from '@components/Hotlabel';
import FavoriteIcon from '@components/Buttons/Toogle/Favorite';

import image from '@images/product-card-main.png';

const ProductCardMain: React.FC = props => {
  const { placeholder, end } = props;

  return (
    <View style={[
      end && { marginRight: 14},

      styles.container]} >
      <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.image} source={image}>
        <View style={styles.viewHotlabel}>
          <Hotlabel active placeholder="-20%" />
        </View>

        <View style={styles.viewFavoriteIcon}>
          <FavoriteIcon />
        </View>
      </ImageBackground>

      <View style={{ flex: 1, alignSelf: 'flex-start', paddingLeft: 1, }} >

        <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 8, marginBottom: 4, }} >
          <View style={styles.viewStars}>
            <IonicIcons name="star" size={13} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <IonicIcons name="star" size={13} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <IonicIcons name="star" size={13} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <IonicIcons name="star" size={13} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <IonicIcons name="star" size={13} color="#FFBA49" style={{ marginHorizontal: 1 }} />
          </View>

          <View style={styles.viewNumberOfReviews} >
            <Text style={styles.TextNumberOfReviews}>(10)</Text>
          </View>

        </View>

        <View>
          <Text style={styles.brandName}>Dorothy Perkins</Text>
          <Text style={styles.itemName}>Evening Dress</Text>
        </View>

        <View style={styles.viewPrice} >
          <Text style={[styles.price, {
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
            color: '#ABB4BD',
            marginRight: 4,
          }]}>15$</Text>
          <Text style={styles.price}>12$</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16, 
    marginLeft: 14,
    width: 150, height: 270,
    alignItems: 'center',
  },

  viewHotlabel: {
    marginHorizontal: 9,
    marginVertical: 8,
  },

  viewFavoriteIcon: {
    zIndex: 5,
    marginTop: 125,
    alignSelf: "flex-end",
  },

  image: {
    width: 148, height: 184,
  },

  viewStars: {
    flexDirection: "row",
    alignItems: "center"
  },

  viewNumberOfReviews: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 2.5
  },

  TextNumberOfReviews: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    lineHeight: 12,
    color: '#ABB4BD',
  },

  brandName: {
    fontSize: 11, lineHeight: 16,
    color: '#ABB4BD',
    fontFamily: 'Poppins-Regular'
  },

  itemName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 24,
    color: '#F7F7F7',
  },

  viewPrice: {
    flexDirection: 'row',
  },

  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FF3E3E',
  },

});



export default ProductCardMain;
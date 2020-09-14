import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';

import image from '@images/product-cart.png';

import { useTheme } from '@contexts/theme';

const ProductCartBag: React.FC = (props) => {
  const { end } = props;
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background}]} >
      <Image style={{ width: 104, height: 104, }} source={image} />

      <View style={styles.infoContainer}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>

            <View>
              <Text style={[styles.textName, { color: theme.textColor }]}>Pullover</Text>
            </View>

            <View style={styles.viewColorSize}>
              <Text style={{ fontSize: 16, color: theme.textColorSecundary }}>Color: <Text style={{ color: theme.textColor }}>Black</Text></Text>
              <Text style={{ fontSize: 16, marginLeft: 12, color: theme.textColorSecundary }}>Size: <Text style={{ color: theme.textColor }}>L</Text></Text>
            </View>

          </View>

          <IonicIcons name="ellipsis-vertical" size={17} color="#ABB4BD" />
        </View>

        <View style={styles.viewAddRemovePrice}>

          <View style={styles.viewIconAddRemove} >

            <IonicIcons name="remove" size={28} color={theme.textColorSecundary} 
              style={[styles.setQuantIcon, { backgroundColor: theme.background, paddingLeft: 4.325, marginRight: 16,}]} 
            />

            <Text style={[styles.textQuantity, { color: theme.textColor}]}>1</Text>

            <IonicIcons name="add" size={28} color={theme.textColorSecundary} 
              style={[styles.setQuantIcon, {  backgroundColor: theme.background, paddingLeft: 4.325, marginLeft: 16,}]} 
            />

          </View>

          <View>
            <Text style={[styles.textPrice, {color: theme.textColor}]}>51$</Text>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    shadowOpacity: 0.39,
    elevation: 5,

    //shadowColor: '#121212',
    shadowColor: '#000119'
  },

  infoContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  textName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },

  viewColorSize: {
    flexDirection: 'row'
  },

  viewAddRemovePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },

  viewIconAddRemove: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  setQuantIcon: {
    padding: 2.5,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    
    shadowRadius: 12,
    shadowOpacity: 0.39,
    elevation: 5,
    textAlign: 'center',
    textAlignVertical: 'center',

    shadowColor: '#121212',
  },

  textQuantity: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlignVertical: 'center',
  },


  textPrice: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginRight: 5,
  }
});
export default ProductCartBag;

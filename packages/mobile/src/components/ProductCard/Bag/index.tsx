import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';

import image from '@images/product-cart.png';

const ProductCartBag: React.FC = (props) => {
  const { end } = props;

  return (
    <View style={styles.container} >
      <Image style={{ width: 104, height: 104,}} source={image}/>

      <View style={styles.infoContainer}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>

            <View>
              <Text style={styles.textName}>Pullover</Text>
            </View>

            <View style={styles.viewColorSize}>
              <Text style={{ fontSize: 16, color: '#ABB4BD' }}>Color: <Text style={{ color: '#F6F6F6' }}>Black</Text></Text>
              <Text style={{ fontSize: 16, marginLeft: 12, color: '#ABB4BD' }}>Size: <Text style={{ color: '#F6F6F6' }}>L</Text></Text>
            </View>

          </View>

          <IonicIcons name="ellipsis-vertical" size={17} color="#ABB4BD" />
        </View>

        <View style={styles.viewAddRemovePrice}>

          <View style={styles.viewIconAddRemove} >                      

            <IonicIcons name="remove" size={28} style={styles.removeIcon} color="#ABB4BD" />

            <Text style={styles.textQuantity}>1</Text>

            <IonicIcons name="add" size={28} style={styles.addIcon} color="#ABB4BD" />

          </View>

          <View>
            <Text style={styles.textPrice}>51$</Text>
          </View>

        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 104,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2c36',
    margin: 0,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#121212',
    shadowRadius: 12,
    shadowOpacity: 0.39,
    elevation: 5,
  }, 
  
  infoContainer:{
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }, 

  textName:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 24,
    color: '#F6F6F6',
  }, 

  viewColorSize:{
    flexDirection: 'row'
  },

  viewAddRemovePrice:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10, 
    alignItems: 'center',
  },

  viewIconAddRemove:{
    flexDirection: 'row', 
    alignItems: 'center'
  }, 

  removeIcon:{
    backgroundColor: '#2A2C36',
    padding: 2.5,
    borderRadius: 20,
    paddingLeft: 4.325,
    marginRight: 16,  

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#121212',
    shadowRadius: 12,

    shadowOpacity: 0.39,
    elevation: 5,

    textAlign: 'center',
    textAlignVertical: 'center',
  },

  textQuantity:{
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#F6F6F6',
    textAlignVertical: 'center',
  },

  addIcon:{
    backgroundColor: '#2A2C36',
    padding: 2.5,
    borderRadius: 20,
    paddingLeft: 4.325,
    marginLeft: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#121212',
    shadowRadius: 12,

    shadowOpacity: 0.39,
    elevation: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  }, 

  textPrice:{
    fontFamily: 'Poppins-Medium',
    color: '#F6F6F6',
    fontSize: 16,
    marginRight: 5,
  }
}); 
export default ProductCartBag;

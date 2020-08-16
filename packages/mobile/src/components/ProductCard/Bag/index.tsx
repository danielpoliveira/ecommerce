import React from 'react';
import { View, Text, Image } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';

import image from '@images/product-cart.png';

const ProductCartBag: React.FC = (props) => {
  const { end } = props;

  return (
    <View style={{
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
    }} >
      <Image style={{
        width: 104,
        height: 104,
        backgroundColor: 'blue',
      }}
        source={image}
      />

      <View style={{
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>

            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#F6F6F6',

                }}
              >Pullover</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, color: '#ABB4BD' }}>Color: <Text style={{ color: '#F6F6F6' }}>Black</Text></Text>
              <Text style={{ fontSize: 16, marginLeft: 12, color: '#ABB4BD' }}>Size: <Text style={{ color: '#F6F6F6' }}>L</Text></Text>
            </View>
          </View>

          <IonicIcons name="ellipsis-vertical" size={17} color="#ABB4BD" />
        </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center',
        }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }} >

            <IonicIcons name="remove" size={28} style={{
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
            }} color="#ABB4BD" />

            <Text style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 20,
              color: '#F6F6F6',
              textAlignVertical: 'center',
            }}>1</Text>

            <IonicIcons name="add" size={28} style={{
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
            }} color="#ABB4BD" />

          </View>

          <View>
            <Text style={{
              fontFamily: 'Poppins-Medium',
              color: '#F6F6F6',
              fontSize: 16,
              marginRight: 5,
            }}>51$</Text>
          </View>

        </View>
      </View>
    </View>
  );
};
export default ProductCartBag;

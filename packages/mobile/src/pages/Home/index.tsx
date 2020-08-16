import React from 'react';
import {
  View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions,
} from 'react-native';

import banner from '@images/homescreen-banner.png';
import grid1 from '@images/grid1.png';
import grid2 from '@images/grid2.png';
import grid3 from '@images/grid3.png';
import ButtonPrimarySm from '@components/Buttons/Small/Primary';

import ProductCardMain from '@components/ProductCard/Main';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home: React.FC = () => (
  <ScrollView >
    <ImageBackground
      source={banner}
      style={styles.imageBackground}
    >
      <View style={styles.textImageBackgroundContainer} >

        <View style={{ marginVertical: 18 }} >
          <Text style={styles.textImageBackgroundTitle}>Fashion {'\n'}sale</Text>
        </View>

        <View>
          <ButtonPrimarySm placeholder="Check" />
        </View>

      </View>
    </ImageBackground>

    <View style={{ flex: 1, paddingHorizontal: 13 }} >
      <View style={{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

      }} >
        <Text style={{
          fontSize: 34,
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

    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <ProductCardMain />
      <ProductCardMain />
      <ProductCardMain />
      <ProductCardMain end />
    </ScrollView>

    <View style={{ flex: 1, paddingHorizontal: 13 }} >
      <View style={{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

      }} >
        <Text style={{
          fontSize: 34,
          fontFamily: 'Poppins-Bold',
          lineHeight: 60,
          color: '#f6f6f6',
        }} >Sale</Text>
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
        }}>Super summer sale</Text>
      </View>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <ProductCardMain />
      <ProductCardMain />
      <ProductCardMain />
      <ProductCardMain end />
    </ScrollView>

    <View >

      <View>
        <ImageBackground source={grid1} style={{ width: '100%', height: windowHeight / 2, marginTop: 30 }}>
          <View style={{ alignItems: 'flex-end', marginVertical: '65%', paddingHorizontal: 13 }}>
            <Text style={{
              lineHeight: 51,
              color: '#F6F6F6',
              fontFamily: 'Poppins-Black',
              fontSize: 34,
            }}
            >New collection
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View style={{
            backgroundColor: '#1E1F28', width: windowWidth / 2, height: 187, alignItems: 'center', justifyContent: 'center',
          }}>
            <Text style={{
              lineHeight: 51,
              color: '#EF3651',
              fontFamily: 'Poppins-Black',
              fontSize: 34,
            }}
            > Summer {'\n'}sale
            </Text>
          </View>

          <ImageBackground source={grid2} style={{ width: windowWidth / 2, height: 187 }}>
            <View style={{ alignItems: 'flex-start', marginVertical: '65%', paddingHorizontal: 13 }}>
              <Text style={{
                lineHeight: 51,
                color: '#F6F6F6',
                fontFamily: 'Poppins-Black',
                fontSize: 34,
              }}
              >Black
                </Text>
            </View>
          </ImageBackground>

        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <ImageBackground source={grid3} style={{ width: windowWidth / 2, height: 374 }}>
          </ImageBackground>
        </View>

      </View>

    </View>

  </ScrollView>
);

const styles = StyleSheet.create({
  imageBackground: {
    height: 450,
    width: '100%',
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

import React, { Component } from 'react';
import {
  View, Text, ImageBackground, ScrollView,
  Animated, StyleSheet, Dimensions, Platform, RefreshControl,
} from 'react-native';

import banner from '@images/homescreen-banner.png';
import grid1 from '@images/grid1.png';
import grid2 from '@images/grid2.png';
import grid3 from '@images/grid3.png';
import ButtonPrimarySm from '@components/Buttons/Small/Primary';

import ProductCardMain from '@components/ProductCard/Main';
import Title from '@components/Title';

const HEADER_MAX_HEIGHT = 450;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };
  }

  render() {
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, 0, HEADER_SCROLL_DISTANCE],
      // inputRange: [-64, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <Animated.ScrollView style={styles.fill} scrollEventThrottle={1}
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              { useNativeDriver: true },
            )
          }

          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
          showsVerticalScrollIndicator={false}
        >

          <View style={{
            paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
          }}>
            <View style={{ paddingHorizontal: 13 }}>
              <Title placeholder="New" description="You’ve never seen it before!" viewAll />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <ProductCardMain />
              <ProductCardMain />
              <ProductCardMain />
              <ProductCardMain end />
            </ScrollView>

            <View style={{ paddingHorizontal: 13 }}>
              <Title placeholder="Sale" description="Super summer sale" viewAll />
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
                    <Text
                      style={{
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
                    >Summer {'\n'}sale
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
          </View>
        </Animated.ScrollView>

        <Animated.View
          pointerEvents="none"
          style={[{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,

            // backgroundColor: '#03A9F4',
            overflow: 'hidden',
            height: HEADER_MAX_HEIGHT,
          }, { transform: [{ translateY: headerTranslate }] }]}>

          <Animated.Image
            style={[styles.imageBackground,
              {
                opacity: imageOpacity,

                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={banner}
          />

        </Animated.View>

        <Animated.View style={[{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        },
        {
          transform: [
            { translateY: titleTranslate },
          ],
        },

        ]} >
          <View style={styles.textImageBackgroundContainer} >

            <View style={{ marginVertical: 18 }} >
              <Text style={styles.textImageBackgroundTitle}>Fashion {'\n'}sale</Text>
            </View>

            <View>
              <ButtonPrimarySm placeholder="Check" />
            </View>

          </View>
        </Animated.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },

  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
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

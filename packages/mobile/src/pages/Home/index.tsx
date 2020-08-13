import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import banner from '@images/homescreen-banner.png';

import ButtonPrimarySm from '@components/Buttons/Small/Primary';

const Home: React.FC = () => (
  <View style={{ flex: 1 }}>
    <ImageBackground
      imageStyle={{


      }}
      source={banner} style={{
        height: '85%',
        width: '100%'


      }}>

      <View style={{marginTop: 270, paddingHorizontal: 10}} >

        <View style={{marginVertical: 18}} >
          <Text style={{
            maxWidth: 190,lineHeight: 60,
            color: '#F6F6F6',
            fontFamily: 'Poppins-Black', fontSize: 48}}>Fashion sale</Text>
        </View>

        <View>
          <ButtonPrimarySm placeholder="Check" />
        </View>


      </View>
    </ImageBackground>
  </View>
);


export default Home;
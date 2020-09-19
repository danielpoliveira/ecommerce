import React from 'react';
import { View, Text } from 'react-native';

import _ from 'lodash';

import { useTheme } from '@contexts/theme';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicicons from 'react-native-vector-icons/Ionicons';


export const Title = props => {
  const { theme } = useTheme();
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }} >
        <Text style={{ fontSize: 30, lineHeight: 35, fontFamily: 'Poppins-Bold', color: theme.textColor }}>H&M</Text>
        <Text style={{ fontSize: 30, lineHeight: 35, fontFamily: 'Poppins-Bold', color: theme.textColor }}>$19.99</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, lineHeight: 25, fontFamily: 'Poppins-Regular', color: theme.textColorSecundary }}>Short black dress</Text>
        <View style={{ flexDirection: 'row', alignItems: "center", marginBottom: 4, }} >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="star" size={15} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <FontAwesome name="star" size={15} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <FontAwesome name="star" size={15} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <FontAwesome name="star" size={15} color="#FFBA49" style={{ marginHorizontal: 1 }} />
            <FontAwesome name="star" size={15} color="#FFBA49" style={{ marginHorizontal: 1 }} />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 2.5 }} >
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                lineHeight: 20,
                color: theme.textColorSecundary
              }}
            >(10)</Text>
          </View>

        </View>
      </View>

    </View >
  );
}

export const Description = props => {

  const { theme } = useTheme();

  return (
    <View style={{ paddingTop: 15, }}>
      <Text style={{ fontSize: 17, color: theme.textColor }} >
        Short dress in soft cotton jersey with decorative buttons down the front and a wide,
        frill-trimmed square neckline with concealed elastication.
        Elasticated seam under the bust and short puff sleeves with a small frill trim.
      </Text>
    </View>
  );
}

export const Option = props => {
  const { placeholder, end } = props;
  const { theme } = useTheme();

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderTopWidth: 1,
      borderBottomWidth: end ? 1 : undefined,
      borderColor: theme.lineColor,
      paddingHorizontal: 15, 
    }} >
      <Text
        style={{
          fontSize: 22,
          color: theme.textColor,
          paddingVertical: 10,

        }}
      >{_.upperFirst(placeholder)}</Text>
      <Ionicicons name="chevron-forward" size={22} color={theme.textColor} style={{ marginHorizontal: 1 }} />
    </View>
  );
}

export const MoreProducts = props => {
  const { theme } = useTheme();

  return (
    <View>
      <Text style={{
        color: theme.textColor,
        fontSize: 26,
        fontFamily: 'Poppins-Regular'
      }}>You can also like this</Text>
    </View>

  );
}
import React from 'react';
import { View, Text } from 'react-native';

const Title: React.FC = (props) => {
  const { placeholder, viewAll, description } = props;

  return (
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
        }} >{placeholder}</Text>

        {viewAll && (
          <Text style={{
            fontSize: 12,
            lineHeight: 16,
            fontFamily: 'Poppins-Regular',
            color: '#f6f6f6',
          }}>View all</Text>)
        }

      </View>

      {description && (
        <View>
          <Text style={{
            color: '#ABB4BD',
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            lineHeight: 16,
          }}>{description}</Text>
        </View>)
      }

    </View>
  );
};
export default Title;

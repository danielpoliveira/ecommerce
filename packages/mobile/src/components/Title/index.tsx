import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from '@contexts/theme';

type TitleProps = {
  placeholder: string,
  viewAll?: true,
  description?: string,
};

const Title: React.FC<TitleProps> = (props) => {
  const { placeholder, viewAll, description } = props;
  const { theme } = useTheme();

  return (
    <>
      <View style={styles.container} >
        <Text
          style={[
            styles.title,
            { color: theme.textColor, }
          ]}
        >{placeholder}</Text>

        {viewAll && (
          <Text style={[styles.simpleText, {
            color: theme.textColor,
          }]}>View all</Text>)
        }

      </View>

      {description && (
        <View>
          <Text 
            style={[styles.description, 
              { color: theme.textColorSecundary, 
            }]
            }
          >{description}</Text>
        </View>)
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 34,
    fontFamily: 'Poppins-Bold',
    lineHeight: 60,
  },

  description: {
    color: '#ABB4BD',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16,
  },

  simpleText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
  }
});

export default Title;

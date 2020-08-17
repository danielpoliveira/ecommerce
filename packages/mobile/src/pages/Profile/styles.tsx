import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';
import Switch from '@components/Switches';

type AvatarViewProps = {
  name: string,
  email: string,
};

type LineSelectionProps = {
  title: string,
  description?: string,
  end?: boolean,
};

export const AvatarView: React.FC<AvatarViewProps> = props => {

  const { name, email } = props;

  return (
    <View style={styles.avatarContainer}>
      <Image
        source={{ uri: 'https://avatars1.githubusercontent.com/u/25672257?s=460&u=600d91f7cb9799352b2b903b59bae2f0eddd2c08&v=4' }}
        style={styles.avatarImage}
      />
      <View style={styles.profileDataContainer} >
        <View>
          <Text style={styles.avatarName}>{name}</Text>
          <Text style={styles.avatarEmail}>{email}</Text>
        </View>
        <View style={styles.darkThemeSwitchContainer}>
          <IonicIcons style={{ marginRight: 5 }} name="moon-outline" color="#F6F6F6" size={20} />
          <Switch />
        </View>
      </View>
    </View >
  );
}

export const LineSelection: React.FC<LineSelectionProps> = props => {
  const { title, description, end } = props;

  return (
    <View style={[styles.lineSelectionContainer, !end && styles.notEndLineSelection]}>
      <View>
        <Text style={styles.lineSelectionTitle}>{title}</Text>
        
        {description 
          && (<Text style={styles.lineSelectionDescription}>{description}</Text>)}

      </View>
      <View>
        <IonicIcons name="chevron-forward" color="#ABB4BD" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: '100%',
    height: 64,
    flexDirection: "row"
  },

  avatarImage: {
    marginLeft: 5,
    width: 64, height: 64,
    borderRadius: 64,
    backgroundColor: 'gray',
  },

  profileDataContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
  },

  avatarName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#F6F6F6',
  },

  avatarEmail: {
    color: '#ABB4BD',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 20,
  },

  darkThemeSwitchContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },

  lineSelectionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  lineSelectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#F6F6F6',
  },

  lineSelectionDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13.5,
    color: '#ABB4BD',
  },

  notEndLineSelection: {
    borderBottomWidth: 1,
    borderBottomColor: '#ABB4BD0D'
  }, 
});

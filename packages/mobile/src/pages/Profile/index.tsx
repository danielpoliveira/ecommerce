import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';

import Title from '@components/Title';
import { AvatarView, LineSelection } from './styles';

const Profile = props => {
  
  return (
    <View style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,

    }}>
      <View style={{
        paddingHorizontal: 15,
      }} >
        <View style={{ marginBottom: 10 }}>
          <Title placeholder="My Profile" />
        </View>
      </View>

      <ScrollView>
        <View style={{
          paddingHorizontal: 15,
        }} >

          <View style={{ marginBottom: 40 }}>
            <AvatarView name="Daniel Oliveira" email="dani.edm@outlook.com" />
          </View>
        </View>

        <View>
          <LineSelection title="My orders" description="Already have 12 orders" />
          <LineSelection title="Shipping addresses" description="3 ddresses" />
          <LineSelection title="Payment methods" description="Visa  **34" />
          <LineSelection title="Promocodes" description="You have special promocodes" />
          <LineSelection title="My reviews" description="Reviews for 4 items" />

          <LineSelection title="Settings" description="Notifications, password" end />
        </View>

      </ScrollView>

    </View>
  );
}

export default Profile;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Label from '@components/TextFields/Label';
import Primary from '@components/Buttons/Big/Primary';

import Arrow from '@arrow/Vector';
import Google from '@components/Buttons/Toogle/Social/Google';
import Facebook from '@components/Buttons/Toogle/Social/Facebook';

const ForgotPassword: React.FC = () => {

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.viewForgotPass} >
          <Text style={styles.textForgotPass} >
            Please, enter your email address. You will receive a link to create a new password via email.
          </Text>
        </View>
        <View style={styles.formEmail}>
          <Label placeholder="Email" />
        </View>

      </View>

      <View style={styles.viewSubmit}>
        <Primary placeholder="Send" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2C36',
    flex: 1,
  },
  header: {
    paddingLeft: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerText: {
    paddingTop: 104,
    fontFamily: 'Poppins-Bold',
    color: '#F7F7F7',
    fontSize: 34,
    lineHeight: 34,
    paddingHorizontal: 15,
  },
  form: {
    justifyContent: 'center',
    paddingTop: 73,
    paddingHorizontal: 15

  },
  formEmail: {
    paddingBottom: 8,
    alignItems: 'center'
  },
  viewForgotPass: { 
    paddingHorizontal: 25, 
    paddingBottom: 16 
  },
  textForgotPass: {
    color: '#F6F6F6',
    lineHeight: 20,
    fontSize: 14,
  },

  formPassword: {
    alignItems: 'center'
  },
  viewForgotText: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
    paddingRight: 30

  },
  forgotText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7'
  },
  viewSubmit: {
    paddingTop: 32,
    alignItems: 'center'
  },

  viewArrow: {
    paddingRight: 15,
  },
  viewAlternativeLoginContent: {
    alignItems: 'center',
    padding: '10%'
  },
  viewAlternativeLoginText: {
    paddingBottom: 12
  },
  textAlternativeLogin: {
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7'
  },
  viewAlternativeLoginButtons: {
    flexDirection: 'row'
  },
  google: {
    paddingRight: 8
  },
  facebook: {
    paddingLeft: 8
  }

});



export default ForgotPassword;
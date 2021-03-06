import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Label from '@components/TextFields/Label';
import Primary from '@components/Buttons/Big/Primary';
import Arrow from '@arrow/Vector';
import Google from '@components/Buttons/Toogle/Social/Google';
import Facebook from '@components/Buttons/Toogle/Social/Facebook';

const SignUp: React.FC = () => {

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign up</Text>
      </View>
      <View style={styles.form}>

        <View style={styles.formName}>
          <Label placeholder="Name" />
        </View>

        <View style={styles.formEmail}>
          <Label placeholder="Email" />
        </View>

        <View style={styles.formPassword}>
          <Label placeholder="Password" />
        </View>

      </View>

      <View style={styles.viewForgotText}>
        <Text style={styles.forgotText}>Forgot your password? </Text>
        <View style={styles.viewArrow} >
          <Arrow width={20} height={22} />
        </View>
      </View>

      <View style={styles.viewSubmit}>
        <Primary placeholder="Login" />
      </View>

      <View style={styles.viewAlternativeLoginContent}>
        <View style={styles.viewAlternativeLoginText}>
          <Text style={styles.textAlternativeLogin}>Or login with social account </Text>
        </View>

        <View style={styles.viewAlternativeLoginButtons}>
          <View style={styles.google}>
            <Google />
          </View>
          <View style={styles.facebook}>
            <Facebook />
          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

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

  formName: {
    paddingBottom: 8,
    alignItems: 'center'
  },

  formEmail: {
    paddingBottom: 8,
    alignItems: 'center'
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


export default SignUp;
import * as React from 'react';
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {inject, observer} from 'mobx-react';

import styles from './RegistrationScreenStyle.js';
import VehoTextInput from '../../components/VehoTextInput';
import VehoButton from '../../components/VehoButton';

function RegistrationScreen({navigation}) {

  return (
      <KeyboardAvoidingView style={styles.containerAvoid}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Register</Text>
            </View>
            <View style={styles.inputContainer}>
              <ScrollView bounces={false} style={styles.containerScroll}>
                <VehoTextInput hint={'Firstname'}/>
                <VehoTextInput hint={'Lastname'}/>
                <VehoTextInput hint={'Email'}/>
                <VehoTextInput hint={'Password'} secureTextEntry={true}/>
                <VehoTextInput hint={'Repeat Password'} secureTextEntry={true}/>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.buttonContainer}>
          <VehoButton title={'Register'}
                      text="Register"
                      style={styles.loginButton}
                      onPress={() => {
                        Keyboard.dismiss();
                        navigation.navigate('App');
                      }}/>
          <VehoButton title={'BackToLogin'}
                      text="Back to login"
                      style={styles.registerButton}
                      onPress={() => {
                        Keyboard.dismiss();
                        navigation.navigate('Login');
                      }}/>
        </View>
      </KeyboardAvoidingView>
  );
}

export default inject('store')(observer(RegistrationScreen));
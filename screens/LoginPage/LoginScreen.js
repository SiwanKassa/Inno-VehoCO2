import * as React from 'react';
import styles from './LoginScreenStyle.js';
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import VehoButton from '../../components/VehoButton';
import VehoTextInput from '../../components/VehoTextInput';


function LoginScreen({navigation}) {

  return (
      <KeyboardAvoidingView style={styles.containerAvoid}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome To</Text>
                <Text style={styles.titleText}>VEHO CO2 APP</Text>
              </View>
              <View style={styles.inputContainer}>
                <ScrollView bounces={false} style={styles.containerScroll}>
                  <VehoTextInput hint={'Username'}/>
                  <VehoTextInput hint={'Password'} secureTextEntry={true}/>
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>

        <View style={styles.buttonContainer}>
          <VehoButton title={'Login'}
                      text="Login"
                      style={styles.loginButton}
                      onPress={() => {
                        Keyboard.dismiss();
                        navigation.navigate('App');
                      }}/>
          <VehoButton title={'Register'}
                      text="Register"
                      style={styles.registerButton}
                      onPress={() => {
                        Keyboard.dismiss();
                        navigation.navigate('Register');
                      }}/>
        </View>
      </KeyboardAvoidingView>
  );
}

export default LoginScreen;

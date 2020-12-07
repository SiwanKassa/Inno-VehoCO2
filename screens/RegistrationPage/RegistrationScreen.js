import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button,
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

  /*

         const [loginInfo, setLogin] = useState{
               user: {
                   username: '',
                   password: '',
               },

               toggleForm: true,
               validUser: true,

           };


           doRegistration =  () => {
               login(loginInfo.user.username, loginInfo.user.password).then(async (response) => {
                   if(!response.token) {
                       alert(response.message)
                   }else{
                       await AsyncStorage.setItem('token', response.token);
                          navigation.navigate('App');
                   }
               });
           };
           handlePasswordChange = (text) => {

               setLoginInfo(previousState => ({
                   user:{
                       ...previousState.user, password: text,
                   },}));
           };
           handleUsernameChange = (text) => {

               console.log(text)
               setLoginInfo(previousState => ({
                   user:{
                       ...previousState.user, username: text,
                   },}));
           };
  */

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
                {
                  /*
                <TextInput
                    name={'firstName'}
                    //       value={this.state.user.username}//
                    keyboardType='email-address'
                    //    onChangeText={ (text)=>{this.handleUsernameChange(text)}}//
                    placeholder={'first name'}
                    placeholderTextColor='grey'
                    style={styles.input}
                />
                <TextInput
                    name={'lastName'}
                    //       value={this.state.user.username}//
                  keyboardType = 'email-address'
                  //    onChangeText={ (text)=>{this.handleUsernameChange(text)}}//
                  placeholder={'last name'}
                  placeholderTextColor='grey'
                  style={styles.input}
              />
              <TextInput
                  name={'email'}
                  //       value={this.state.user.username}//
                  keyboardType='email-address'
                  //    onChangeText={ (text)=>{this.handleUsernameChange(text)}}//
                  placeholder={'email'}
                  placeholderTextColor='grey'
                  style={styles.input}
              />
              <TextInput secureTextEntry={true}
                         name={'password'}
                  //        value={this.state.user.password}
                          onChangeText={(text)=>{this.handlePasswordChange(text)}}//
                  placeholder={'password'}
                  //   secureTextEntry={true}//
                  placeholderTextColor='grey'
                  style={styles.input}
                  />
              <TextInput secureTextEntry={true}
                  name={'repeat-password'}
                  //        value={this.state.user.password}
                  onChangeText={(text) => {
                  this.handlePasswordChange(text)
                }}//
                  placeholder={'repeat password'}
                  //   secureTextEntry={true}//
                  placeholderTextColor='grey'
                  style={styles.input}
                  />
                  //
                 */
                }
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
import * as React from 'react';
import styles from './LoginScreenStyle.js';
import {
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  AsyncStorage,
  Button,
  Image,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Logo from '../veho_logo.png';
import VehoButton from '../../components/VehoButton';
import VehoTextInput from '../../components/VehoTextInput';

/*import {login, register, getUser, checkUser} from '../../utils/MediaAPI';*/

function LoginScreen({navigation}) {

  /*

          const [loginInfo, setLogin] = useState{
               user: {
                   username: '',
                   password: '',
               },

               toggleForm: true,
               validUser: true,

           };


           onLogin()=> {
               const { username, password } = this.state.user;

               Alert.alert('Credentials', `email: ${username} + password: ${password}`);
               evt.preventDefault();
               this.doLogin();
           }
           doLogin =  () => {
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
                <Text style={styles.titleText}>Welcome To</Text>
                <Text style={styles.titleText}>VEHO CO2 APP</Text>
              </View>
              <View style={styles.inputContainer}>
                <ScrollView bounces={false} style={styles.containerScroll}>
                  <VehoTextInput hint={'Username'}/>
                  <VehoTextInput hint={'Password'} secureTextEntry={true}/>
                  {
                    /*<TextInput
                      name={'username'}
                      //       value={this.state.user.username}//
                      keyboardType='email-address'
                      //    onChangeText={ (text)=>{this.handleUsernameChange(text)}}//
                      placeholder={'username'}
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
                  />*/
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

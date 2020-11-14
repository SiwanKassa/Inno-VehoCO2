import * as React from 'react';
import styles from './LoginScreenStyle.js'
import { Alert,  Text, TouchableOpacity, TextInput, View, AsyncStorage,Button } from 'react-native';
/*import {login, register, getUser, checkUser} from '../../utils/MediaAPI';*/

 function LoginScreen ({navigation}){

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
                 <View style={styles.container}>
                     <Text style={styles.titleText}>Welcome To</Text>
                     <Text style={styles.titleText}>VEHO CO2 APP</Text>
                     <TextInput
                         name={'username'}
                  /*       value={this.state.user.username}*/
                         keyboardType = 'email-address'
                     /*    onChangeText={ (text)=>{this.handleUsernameChange(text)}}*/
                         placeholder={'username'}
                         placeholderTextColor = 'black'
                         style={styles.input}
                     />
                     <TextInput
                         name={'password'}
                 /*        value={this.state.user.password}
                         onChangeText={(text)=>{this.handlePasswordChange(text)}}*/
                         placeholder={'password'}
                      /*   secureTextEntry={true}*/
                         placeholderTextColor = 'black'
                         style={styles.input}
                     />


                     <TouchableOpacity
                         title={'Login'}
                         style={styles.button}
                         onPress={()=>navigation.navigate('App')}
                     >
                         <Text style={styles.buttonText}>  Login </Text>
                     </TouchableOpacity>
                     <Button title={'Register'} onPress={()=> navigation.navigate('Register')} />

                 </View>
             );

}

export default LoginScreen;

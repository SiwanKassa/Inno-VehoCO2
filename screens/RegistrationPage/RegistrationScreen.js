import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View,Button } from 'react-native';
import {inject, observer} from 'mobx-react';

import styles from './RegistrationScreenStyle.js'


function RegistrationScreen ({navigation}){

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
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Register</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    name={'firstName'}
                    /*       value={this.state.user.username}*/
                    keyboardType = 'email-address'
                    /*    onChangeText={ (text)=>{this.handleUsernameChange(text)}}*/
                    placeholder={'first name'}
                    placeholderTextColor = 'black'
                    style={styles.input}
                />
                <TextInput
                    name={'lastName'}
                    /*       value={this.state.user.username}*/
                    keyboardType = 'email-address'
                    /*    onChangeText={ (text)=>{this.handleUsernameChange(text)}}*/
                    placeholder={'last name'}
                    placeholderTextColor = 'black'
                    style={styles.input}
                />
                <TextInput
                    name={'email'}
                    /*       value={this.state.user.username}*/
                    keyboardType = 'email-address'
                    /*    onChangeText={ (text)=>{this.handleUsernameChange(text)}}*/
                    placeholder={'email'}
                    placeholderTextColor = 'black'
                    style={styles.input}
                />
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
                    title={'Register'}
                    style={styles.button}
                    onPress={()=>navigation.navigate('App')}
                >
                    <Text style={styles.buttonText}>  Register </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    title={'Back to login'}
                    style={styles.registerButton}
                    onPress={
                        ()=> props.store.userData.register()
                       /* ()=>navigation.navigate('Login')*/
                    }
                >
                    <Text style={styles.buttonText}>  Back to login </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default inject("store")(observer(RegistrationScreen));
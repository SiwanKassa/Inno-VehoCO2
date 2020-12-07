import * as React from 'react';
import styles from './SettingsViewStyle';
import {Text, View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native';
import VehoTextInput from '../../../components/VehoTextInput';
import VehoButton from '../../../components/VehoButton';
import VehoColors from '../../VehoColors';
import VehoPicker from '../../../components/VehoPicker';
import VehoCard from './../../../components/VehoDetailContainer';
import Logo from './../../veho_logo.png';

function SettingsViewScreen({navigation}) {

  return (
      <KeyboardAvoidingView style={styles.containerAvoid}>
        <VehoCard>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={styles.title}>Settings</Text>
              <ScrollView bounces={false} style={styles.containerScroll}>
                <View style={styles.profilePicContainer}>
                  <View style={styles.profilePic}>
                  </View>
                </View>
                <View style={styles.inputContainer}>

                  <VehoTextInput hint={'Full name'}/>
                  <VehoTextInput hint={'Email address'}/>
                  <VehoPicker/>

                </View>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.buttonContainer}>
            <VehoButton
                text='Save settings'
                style={styles.button}/>
            <VehoButton
                text='Logout'
                style={styles.logOutButton}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.navigate('Auth')}}
                  />

          </View>
        </VehoCard>
      </KeyboardAvoidingView>
  );
}

export default SettingsViewScreen;


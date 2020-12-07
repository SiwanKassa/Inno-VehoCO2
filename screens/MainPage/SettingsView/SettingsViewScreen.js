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
              <Text style={styles.titleContainer}>
                <Text style={styles.titleText}>Settings</Text>
              </Text>
              {/*
                <View style={styles.profilePic}>
                  //<image></image>
                </View>
              */
              }
              <View style={styles.inputContainer}>
                <ScrollView bounces={false} style={styles.containerScroll}>
                  <VehoTextInput hint={'Full name'}/>
                  <VehoTextInput hint={'Email address'}/>
                  <VehoPicker/>
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.buttonContainer}>
            <VehoButton
                text='Save settings'
                style={styles.button}/>
            <VehoButton
                text='Logout'
                style={styles.logOutButton}
                onPress={() => navigation.navigate('Auth')}/>
          </View>
        </VehoCard>
      </KeyboardAvoidingView>
  );
}

export default SettingsViewScreen;


import * as React from 'react';
import styles from './SettingsViewStyle';
import {Text, View, Image} from 'react-native';
import VehoTextInput from '../../../components/VehoTextInput';
import VehoButton from '../../../components/VehoButton';
import VehoColors from '../../VehoColors';
import VehoPicker from '../../../components/VehoPicker';
import VehoCard from './../../../components/VehoDetailContainer';
import Logo from './../../veho_logo.png';

function SettingsViewScreen({navigation}) {
  return (
      /*screen for settings view*/

      <View style={styles.container}>
        <VehoCard>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.profilePic}>
              {/*<image></image>*/}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <VehoTextInput style={styles.input} hint={'Full name'}/>
            <VehoTextInput style={styles.input} hint={'Email address'}/>
            <VehoPicker/>

            <VehoButton text='Save settings' style={styles.button}/>
            <VehoButton text='Logout' style={styles.logOutButton} onPress={() => navigation.navigate('Auth')}/>
          </View>
        </VehoCard>
      </View>
  );
}

export default SettingsViewScreen;


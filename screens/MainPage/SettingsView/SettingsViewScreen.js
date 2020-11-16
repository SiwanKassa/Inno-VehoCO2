import * as React from 'react';
import styles from './SettingsViewStyle'
import {Button, Text, TouchableOpacity, View} from 'react-native';
import VehoTextInput from '../../../components/VehoTextInput';
import VehoButton from '../../../components/VehoButton';
import VehoColors from '../../VehoColors';
import VehoPicker from '../../../components/VehoPicker';

function SettingsViewScreen({navigation}) {
    return (
        /*screen for settings view*/
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            
            <View style={{backgroundColor: VehoColors.white, width: 200, height: 200, borderRadius: 360}}>

            </View>
            <VehoTextInput style={styles.textInput} hint={'Full name'}/>
            <VehoTextInput style={styles.textInput} hint={'Email address'}/>
            <VehoPicker />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <VehoButton text='Save settings' color={VehoColors.secondary}/>
            <VehoButton text='Logout' color={VehoColors.red}/>


            <Button style={styles.button} title={'Logout'} onPress={()=> navigation.navigate('Auth')} />
        </View>
    );
}
export default SettingsViewScreen;


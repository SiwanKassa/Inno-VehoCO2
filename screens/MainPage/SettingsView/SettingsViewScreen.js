import * as React from 'react';
import styles from './SettingsViewStyle'
import { Text, View} from 'react-native';
import VehoTextInput from '../../../components/VehoTextInput';
import VehoButton from '../../../components/VehoButton';
import VehoColors from '../../VehoColors';
import VehoPicker from '../../../components/VehoPicker';

function SettingsViewScreen({navigation}) {
    return (
        /*screen for settings view*/
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Settings</Text>
            
            <View style={{backgroundColor: VehoColors.white, width:200, height: 200, borderRadius: 360}}>
            </View>
        </View>
        <View style={styles.inputContainer}>
            <VehoTextInput style={styles.input} hint={'Full name'}/>
            <VehoTextInput style={styles.input} hint={'Email address'}/>
            <VehoPicker />

            <VehoButton text='Save settings' style={styles.button}/>
            <VehoButton text='Logout' style={styles.logOutButton} onPress={()=> navigation.navigate('Auth')} />
        </View>
        </View>
    );
}
export default SettingsViewScreen;


import * as React from 'react';
import styles from './SettingsViewStyle';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
} from 'react-native';
import VehoTextInput from '../../../components/VehoTextInput';
import VehoButton from '../../../components/VehoButton';
import VehoColors from '../../VehoColors';
import VehoPicker from '../../../components/VehoPicker';
import VehoCard from './../../../components/VehoDetailContainer';
import Logo from './../../veho_logo.png';
import {useState} from 'react';

function SettingsViewScreen({navigation}) {

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  return (
      <KeyboardAvoidingView style={styles.containerAvoid}>
        <VehoCard>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={styles.title}>Settings</Text>
              <ScrollView bounces={false} contentContainerStyle={styles.containerScroll}>
                <View style={styles.profilePicContainer}>
                  <View style={styles.profilePic}>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <VehoTextInput hint={'Full name'}/>
                  <VehoTextInput hint={'Email address'}/>
                  <VehoPicker/>
                </View>
                <View style={styles.carouselSelectionContainer}>
                  <View style={styles.carouselSelectionContainercon}>
                    <Text style={styles.subtitle}>Today's view</Text>
                    <Switch
                        style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                        trackColor={{false: VehoColors.pink, true: VehoColors.secondary}}
                        thumbColor={isEnabled1 ? VehoColors.background : VehoColors.background}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                  </View>
                </View>
                <View style={styles.carouselSelectionContainer}>
                  <View style={styles.carouselSelectionContainercon}>
                    <Text style={styles.subtitle}>Weekly view</Text>
                    <Switch
                        style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                        trackColor={{false: VehoColors.pink, true: VehoColors.secondary}}
                        thumbColor={isEnabled2 ? VehoColors.background : VehoColors.background}
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                  </View>
                </View>
                <View style={styles.carouselSelectionContainer}>
                  <View style={styles.carouselSelectionContainercon}>
                    <Text style={styles.subtitle}>Trip history</Text>
                    <Switch
                        style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                        trackColor={{false: VehoColors.pink, true: VehoColors.secondary}}
                        thumbColor={isEnabled3 ? VehoColors.background : VehoColors.background}
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                    />
                  </View>
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
                  navigation.navigate('Auth');
                }}
            />

          </View>
        </VehoCard>
      </KeyboardAvoidingView>
  );
}

export default SettingsViewScreen;


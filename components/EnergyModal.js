import React, {Component, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import VehoColors from '../screens/VehoColors';
import Modal from 'react-native-modal';
import VehoTextInput from './VehoTextInput';
import VehoButton from './VehoButton';

const EnergyModal = (props) => {
  let heightAnim = useRef(new Animated.Value(0)).current;
  let opacAnim = useRef(new Animated.Value(0)).current;
  let [showDetails, setShowDetails] = useState(false);

  const startAnim = () => {
    setShowDetails(true);
    Animated.timing(heightAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: 0,
    }).start();
    Animated.timing(opacAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: 600,
    }).start();
  };

  return (

      <Modal
          animationType="slide"
          transparent={true}
          isVisible={props.visible}
          onSwipeComplete={() => props.toggleOff(false)}
          swipeDirection="down"
          hasBackdrop={true}
          backdropOpacity={0.5}
          propagateSwipe={true}
          avoidKeyboard={true}
          onBackButtonPress={() => props.toggleOff(false)}
      >

        <Animated.View
            style={{
              ...styles.container,
              height: heightAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['42%', '65%'],
              }),
            }}
        >
          <ScrollView>
            <View style={styles.pullerContainer} onTouchMove={() => {
            }}>
              <View style={styles.puller}/>
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.modalHeader}>Todays Energy</Text>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <Text style={styles.score}>
                  45<Text style={styles.smallScore}>kWh</Text>
                </Text>
                <Text style={styles.smallText}>Today</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.score}>
                  6.3<Text style={styles.smallScore}>kWh</Text>
                </Text>
                <Text style={styles.smallText}>Cars use</Text>
              </View>
            </View>
            <TouchableOpacity
                style={styles.largeBoxContainer}
                onPress={startAnim}
            >
              <View style={styles.largeBox}>
                <Text style={styles.score}>
                  412<Text style={styles.smallScore}> points</Text>
                </Text>
                <Text style={styles.smallScore}>Consume points</Text>
              </View>
            </TouchableOpacity>

            {showDetails ? (
                <Animated.View style={{...styles.details, opacity: opacAnim}}>
                  <Text style={styles.smallScore}>Input station code</Text>
                  <TextInput style={styles.textInput} placeholder="Station code"/>
                  <VehoButton
                      text="Start charging!"
                      color={VehoColors.blue}
                      margin={20}
                      onPress={() => {
                        props.toggleOff(false);
                      }}
                  />
                </Animated.View>
            ) : null}
          </ScrollView>
        </Animated.View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: VehoColors.background,
    width: '100%',
    height: '70%',
    borderRadius: 20,
    elevation: 3,
  },
  containerAvoid: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  subheaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
  },
  pullerContainer: {
    width: '100%',
    height: '6%',
  },
  puller: {
    height: '10%',
    margin: 12,
    width: '33%',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: VehoColors.white,
  },
  modalView: {
    alignSelf: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  largeBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  largeBox: {
    backgroundColor: VehoColors.input,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    padding: 22,
    marginVertical: 5,
  },
  box: {
    backgroundColor: VehoColors.input,
    borderRadius: 8,
    alignItems: 'center',
    width: '43%',
    padding: '2%',
    marginVertical: 12,
  },
  score: {
    color: VehoColors.white,
    fontSize: 46,
    fontWeight: 'bold',
  },
  smallScore: {
    color: VehoColors.white,
    fontSize: 16,
  },
  smallText: {
    color: VehoColors.white,
  },
  subHeader: {
    color: VehoColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: VehoColors.white,
    marginBottom: 6,
    alignSelf: 'center',
    textAlign: 'center',
  },
  details: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: VehoColors.input,
    borderRadius: 10,
    width: '90%',
    fontSize: 24,
    padding: 12,
    margin: 12,
  },
});

export default EnergyModal;

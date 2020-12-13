import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import VehoColors from '../screens/VehoColors';

/**
 * Text input used across the application. Can be given more styles with the spread-syntax.
 */

const VehoTextInput = (props) => {
  const [value, onChangeText] = React.useState('');

  return (
      <View style={styles.container}>
        <TextInput style={styles.input}
                   {...props}
                   onChangeText={text => onChangeText(text)}
                   value={value}
                   placeholder={props.hint}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    elevation: 3,
    width: '100%',
    fontSize: 20,
    backgroundColor: VehoColors.input,
    color: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default VehoTextInput;
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const VehoTextInput = (props) => {
  const [value, onChangeText] = React.useState('');

  return (
  <View style={{width: '100%', margin: 12, alignItems: 'center'}}>
    <TextInput
      {...props}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={props.hint}
    />
  </View>
  );
}


export default VehoTextInput;
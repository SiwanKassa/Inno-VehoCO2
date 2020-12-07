import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import VehoColors from '../screens/VehoColors';

const VehoPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState('aseries');

  return (
      <DropDownPicker
          items={[
            {label: 'Mercedes-Benz A-series', value: 'aseries'},
            {label: 'Mercedes-Benz B-series', value: 'bseries'},
            {label: 'Mercedes-Benz C-series', value: 'cseries'},
          ]}
          defaultValue={selectedValue}
          containerStyle={styles.container}
          style={styles.picker}
          labelStyle={styles.label}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={styles.dropDown}
          onChangeItem={item => {
            setSelectedValue(item.value)
          }}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '90%',
    marginBottom: 150,
    borderWidth: 0,
  },
  button: {
    fontWeight: 'bold',
    fontSize: 20,
    height: '100%',
    width: '100%',
    color: VehoColors.white,
    borderWidth: 0,
  },
  picker: {
    backgroundColor: VehoColors.blue,
    borderRadius: 0,
    height: 200,
    borderWidth: 0,
  },
  label: {
    width: '100%',
    fontSize: 20,
    color: 'white',
  },
  dropDown: {
    backgroundColor: VehoColors.input,
    borderRadius: 0,
    borderWidth: 0,
  },
});

export default VehoPicker;
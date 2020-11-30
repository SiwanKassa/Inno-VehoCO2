import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import VehoColors from '../screens/VehoColors';

const VehoPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState("aseries");
  
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
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '90%',
      marginBottom:10,
  },
  button: {
    fontWeight: 'bold',
    fontSize: 20,
    height: '100%',
    width: '100%',
    color: VehoColors.white,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: VehoColors.white
  },
  picker: {
    backgroundColor: VehoColors.input,
    fontSize: 22,
    borderColor: '#000000',
    height: 40,
  },
  dropDown: {
    backgroundColor: '#13265f',
    borderWidth: 0
  }
});

export default VehoPicker;
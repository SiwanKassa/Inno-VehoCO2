import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import VehoColors from '../screens/VehoColors';

/**
 * Component used to change users active car.
 */

const VehoPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState('aseries');

  return (
        <DropDownPicker
            items={[
              {label: 'Mercedes-Benz A 250e', value: 'aseries'},
              {label: 'Mercedes-Benz C 200', value: 'cseries'},
              {label: 'Mercedes-Benz E 500', value: 'eseries'},
            ]}
            defaultValue={selectedValue}
            style={styles.picker}
            labelStyle={styles.label}
            itemStyle={{justifyContent: 'flex-start'}}
            dropDownStyle={styles.dropDown}
            onChangeItem={item => {
              setSelectedValue(item.value);
            }}
        />
  );
};

const styles = StyleSheet.create({
  picker: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.blue,
    borderWidth: 0,
    elevation: 3,
  },
  label: {
    fontSize: 20,
    paddingVertical: 5,
    color: 'white',
  },
  dropDown: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.input,
    borderRadius: 0,
    borderWidth: 0,
    elevation: 3,
  },
});

export default VehoPicker;
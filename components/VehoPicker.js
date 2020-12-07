import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import VehoColors from '../screens/VehoColors';

const VehoPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState('aseries');

  return (
      <View style={styles.containerView}>
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
              setSelectedValue(item.value);
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  containerView:{
    borderRadius: 10,
    borderWidth: 1,
    height: 300,
    borderColor: '#bdc3c7',
    overflow: 'scroll',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: VehoColors.white,
    borderRadius: 10,
  },
  picker: {
    backgroundColor: VehoColors.blue,
    borderWidth: 0,
  },
  dropDown: {
    backgroundColor: VehoColors.input,
    borderWidth: 0,
  },
});

export default VehoPicker;
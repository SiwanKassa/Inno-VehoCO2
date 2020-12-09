import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import VehoColors from '../screens/VehoColors';
import Modal from 'react-native-modal';
import ShopListItem from './../components/ShopListItem';

const ShoppingModal = (props) => {
  const renderItem = ({item}) => (
      <ShopListItem
          key={item.key}
          item={item}
          name={item.name}
          amount={item.amount}
          eco={item.eco}
          selected={false}
      />
  );

  const groceries = [
    {
      name: 'Oltermanni',
      amount: 1,
      eco: '8g',
      key: '1',
    },
    {
      name: 'Kinkkuvoileipä',
      amount: 1,
      eco: '4.2g',
      key: '2',
    },
    {
      name: 'Täysjyväspagetti',
      amount: 1,
      eco: '1.4g',
      key: '3',
    },
    {
      name: 'Broilerpasta',
      amount: 1,
      eco: '2.1g',
      key: '4',
    },
    {
      name: 'Leipäjuustosalaatti',
      amount: 1,
      eco: '0.4g',
      key: '5',
    },
    {
      name: 'Mifusuikale',
      amount: 2,
      eco: '2.3g',
      key: '6',
    },
    {
      name: 'Wok classic',
      amount: 1,
      eco: '2.2g',
      key: '7',
    },
    /*{
      name: 'Maitorahka',
      amount: 2,
      eco: '0.4g',
      key: '8',
    },
    {
      name: 'Kurkku',
      amount: 1,
      eco: '0.1g',
      key: '9',
    },*/
    {
      name: 'Salaatti',
      amount: 1,
      eco: '0.4g',
      key: '10',
    },
    {
      name: 'Muovikassi',
      amount: 1,
      eco: '2.3g',
      key: '11',
    },
    {
      name: 'Parsakaali',
      amount: 1,
      eco: '0.2g',
      key: '12',
    },
  ];

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
      >
        <View style={styles.container}>
          <View style={styles.pullerContainer} onTouchMove={() => {}}>
            <View style={styles.puller}></View>
          </View>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Todays groceries 9.12.</Text>

            <View style={styles.subheaderContainer}>
              <Text style={styles.subHeader}>No / Item</Text>
              <Text style={styles.subHeader}>g/CO2</Text>
            </View>
            <FlatList
                data={groceries}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                initialNumToRender={20}
                maxToRenderPerBatch={20}
                style={styles.flatList}
            />
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: VehoColors.card,
    width: '100%',
    height: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 3,
    marginTop: '-25%',
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
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
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
  },
});

export default ShoppingModal;

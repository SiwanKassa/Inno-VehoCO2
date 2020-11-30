import React, {useState,useEffect} from 'react';
import styles from './TripListStyle.js';
import {inject, observer} from 'mobx-react';
import { Text, View, ScrollView, FlatList, SafeAreaView, SectionList } from 'react-native';
import {VictoryPie, VictoryLabel} from 'victory-native'
import Svg from 'react-native-svg/src'
import { Dimensions } from 'react-native';
import VehoListItem from './../../../components/VehoListItem';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

function TripListScreen(props) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => (
        <VehoListItem item={item} date={item.startTimestamp} eco={item.attributes[3].value} selected={false}/>
      );

    return(
        /*screen for home/main view*/
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.mainViewHeader}>Trip history</Text>
                </View>
            </View>
            <View style={styles.subheaderContainer}>
                <Text style={styles.dateHeader}>Date</Text>
                <Text style={styles.ecoHeader}>Eco score</Text>
            </View>

            <SafeAreaView>
                <FlatList
                    data={props.store.drivingDataStore.dummyData.tripSummaries}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.identifier}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                    
                    style={styles.flatlist}
                />
            </SafeAreaView>
        </View>

    );
}

export default inject("store")(observer(TripListScreen));



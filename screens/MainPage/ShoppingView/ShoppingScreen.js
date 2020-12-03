import React, {useState,useEffect} from 'react';
import styles from './ShoppingStyle.js';
import {inject, observer} from 'mobx-react';
import { Text, View, ScrollView, FlatList, SafeAreaView, SectionList } from 'react-native';
import {VictoryPie, VictoryLabel} from 'victory-native'
import Svg from 'react-native-svg/src'
import { Dimensions } from 'react-native';
import VehoListItem from './../../../components/VehoListItem';
import VehoCard from './../../../components/VehoDetailContainer'

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

function ShoppingScreen(props) {
    const [selectedId, setSelectedId] = useState(null);


    return(
        /*screen for home/main view*/
        <View style={styles.container}>
            <VehoCard>
                <Text>Heya</Text>
            </VehoCard>
        </View>

    );
}

export default inject("store")(observer(ShoppingScreen));



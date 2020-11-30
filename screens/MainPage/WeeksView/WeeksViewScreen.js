import React, { useState, useEffect } from "react";
import styles from "./WeeksViewStyle.js";
import {Text, View, Dimensions, Button, TouchableOpacity} from "react-native";
import { VictoryChart, VictoryBar } from "victory-native";
import { inject, observer } from "mobx-react";
import VehoDetailContainer from "./../../../components/VehoDetailContainer";
import VehoButton from "../../../components/VehoButton";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const WeeksViewScreen = (props) => {
    /*state for holding the graph data*/
    const [graphicData, setGraphicData] = useState([0, 0]);
    const [xLine,setXLine] = useState([]);
    const [dimensions, setDimensions] = useState({ window, screen });
    const [shownData, setShownData] = useState(0);

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    const updateData=(num)=>{
        setShownData(num)
        setGraphicData([])
        props.store.drivingDataStore.dummyData.tripSummaries.map((item,key)=>{
            /*[0]=distance, [1] avgFuelConsumption, [2] avg speed, [3] ecoScore */
            const value=item.attributes[num].value;
            const date = new Date(item.startTimestamp);
            const usableDate = date.getDate() + "/" + date.getMonth()
            console.log(usableDate);
            console.log(value)
            setXLine(xLine =>[usableDate,...xLine])
            setGraphicData(graphicData =>[...graphicData,{x:usableDate,y:value}])
        });
    }
    /*function for adding the updated data to state when the component renders*/
    useEffect(() => {
        updateData(shownData)
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    }, []);

    return (
        <View style={styles.container}>
            <VehoDetailContainer >
                <View style={styles.headerContainer}>
                    <Text style={styles.mainViewHeader}>Today's data breakdown</Text>
                </View>
                <View style={styles.chartContainer}>
               <VictoryChart
                   domainPadding={{x:20}}
               >
                    <VictoryBar
                    
                        categories={{
                            x:[xLine]
                        }}
                        
                        data={graphicData}
                        style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 }}}
                    />
                </VictoryChart>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        title='Distance'
                        style={styles.button}
                    onPress={()=>updateData(0)}
                    >
                        <Text style={styles.buttonText}>  Distance </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title='Avg fuelconsumption'
                        style={styles.button}
                        onPress={()=>updateData(1)}
                    >
                        <Text style={styles.buttonText}>Avg fuel consumption</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title='Avg Speed'
                        style={styles.button}
                        onPress={()=>updateData(2)}
                    >
                        <Text style={styles.buttonText}>  Avg speed </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title='Eco Score'
                        style={styles.button}
                        onPress={()=>updateData(3)}
                    >
                        <Text style={styles.buttonText}>Eco score</Text>
                    </TouchableOpacity>

                </View>
            </VehoDetailContainer>
        </View>
    );
};

export default inject("store")(observer(WeeksViewScreen));

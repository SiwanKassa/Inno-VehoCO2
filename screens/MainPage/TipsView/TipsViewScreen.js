import * as React from 'react';
import styles from "./TipsViewStyle";
import tips from './Tips/tips';
import plane from './Images/plane.jpg';
import pedals from './Images/pedals.jpg';

import { Text, View, Image, Button } from 'react-native';

function TipsViewScreen({navigation}) {
  const [tip, onChangeTip] = React.useState(tips.plane);
  const [isPlane, onChangePhoto] = React.useState(true);

  const planePhoto = <Image source={plane} style={styles.image} resizeMode='contain'></Image>
  const pedalPhoto = <Image source={pedals} style={styles.image}></Image>

  const planeTip = <Text style={styles.tipText}>{tips.plane.text}</Text>
  const pedalTip = <Text style={styles.tipText}>{tips.pedals.text}</Text>

  const onNextClick = () => {
    onChangePhoto(!isPlane)
  }

  return (
      /*screen for tips view*/
    <View style={styles.container}>
      

      <Text style={styles.title}>Tips to lower your daily carbon footprint</Text>


      <View style={styles.photoContainer}>
        {isPlane ? planePhoto : pedalPhoto}
      </View>
        
      {isPlane ? planeTip : pedalTip}


      <Button title="Next" onPress={onNextClick}></Button>
    </View>
  );
}

export default TipsViewScreen;

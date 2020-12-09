import {StyleSheet} from 'react-native';
import VehoColors from './../../VehoColors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  headerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '80%',
    color: VehoColors.white,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  chartHeader: {
    fontSize: 20,
    color: 'white',
  },
  chartContainer: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 2,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-end',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.input,
    width: '45%',
    height: 50,
    borderRadius: 10,
    margin: 5,
    color: 'white',
    elevation: 3,
  },
});
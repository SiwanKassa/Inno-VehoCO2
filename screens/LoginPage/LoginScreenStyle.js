import {StyleSheet} from 'react-native';
import VehoColors from '../VehoColors';


export default StyleSheet.create({
  containerAvoid: {
    flexGrow : 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  containerScroll: {
    flex: 1,
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    marginTop: -50,
    marginBottom: 50,
  },
  titleText: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.blue,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.vehoDark,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
});
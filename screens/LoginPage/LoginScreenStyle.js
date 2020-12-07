import {StyleSheet} from 'react-native';
import VehoColors from '../VehoColors';

export default StyleSheet.create({
  containerAvoid: {
    flexGrow : 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  containerScroll: {
    flexGrow: 1,
    width: '80%',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  buttonContainer:{
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.blue,
    width: '100%',
    borderRadius: 10,
    margin: 5,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.vehoDark,
    width: '100%',
    borderRadius: 10,
    margin: 5,
  },

});
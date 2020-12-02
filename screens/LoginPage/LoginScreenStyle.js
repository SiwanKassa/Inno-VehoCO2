import {StyleSheet} from 'react-native';
import VehoColors from '../VehoColors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  titleContainer: {
    flex: 4,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  titleText: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  inputContainer: {
    flex: 5,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
  buttonContainer:{
    padding: 200,
    marginBottom: -200,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.blue,
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#13265f',
    backgroundColor: '#13265f',
    width: 300,
    color: 'white',
    padding: 10,
    borderRadius: 10,

  },
  input: {
    width: 300,
    fontSize: 20,
    height: 55,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
  },
});
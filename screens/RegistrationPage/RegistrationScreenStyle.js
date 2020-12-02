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
    flex: 2,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
marginBottom: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.blue,
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#13265f',
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
    backgroundColor: '#13265f',
    width: 300,
    height: 44,
    borderColor: '#13265f',
    borderRadius: 10,
  },
  input: {
    width: 300,
    fontSize: 20,
    height: 55,
    padding: 10,
    borderColor: 'white',
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
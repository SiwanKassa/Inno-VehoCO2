import {StyleSheet} from 'react-native';
import VehoColors from './../../VehoColors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  title: {
    width: '80%',
    color: VehoColors.white,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  profilePic: {
    backgroundColor: VehoColors.white,
    width: 150,
    height: 150,
    borderRadius: 360,
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonContainer:{
    paddingTop: 85,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#13265f',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  logOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E22583',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    width: '90%',
    fontSize: 20,
    height: 55,
    padding: 10,
    backgroundColor: VehoColors.white,
    marginBottom: 10,
    borderRadius: 10,
    color: "black",
  },


});
import {StyleSheet} from 'react-native';
import VehoColors from './../../VehoColors';

export default StyleSheet.create({
  containerAvoid: {
    flexGrow: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  container: {
    flex: 4,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerScroll: {
    flex: 4,
    width: '100%',
  },
  title: {
    width: '80%',
    color: VehoColors.white,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  profilePicContainer:{
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
  },
  inputContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    backgroundColor: VehoColors.input,
    width: 130,
    height: 130,
    borderRadius: 360,
    elevation: 5,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  /*button: {
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
  },*/
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
});
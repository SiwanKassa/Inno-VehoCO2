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
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  inputContainer: {
    flex: 2,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerScroll: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
  },
  titleText: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  profilePic: {
    flex: 1,
    backgroundColor: VehoColors.white,
    width: 150,
    height: 150,
    borderRadius: 360,
    marginTop: 20,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
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
  title: {
    width: '80%',
    color: VehoColors.white,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  photoContainer: {
    flex: 1.3,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: '90%',
    height: '80%',
    resizeMode: 'cover',
  },
  tipText: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: VehoColors.white,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
  /*buttonContainer:{
    marginTop: 85,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.blue,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },*/
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.blue,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
});
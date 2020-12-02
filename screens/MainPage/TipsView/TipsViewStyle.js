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
  photoContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    marginVertical: 12,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tipText: {
    width: '90%',
    color: VehoColors.white,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 12,
  },
  buttonContainer:{
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
  },
});
import { StyleSheet } from 'react-native';
import VehoColors from './../../VehoColors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 16,
        backgroundColor: VehoColors.background,
    },
    title: {
        width: '80%',
        color: VehoColors.white,
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    photoContainer: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',             
        aspectRatio: 1,
        marginVertical: 24
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
    }
});
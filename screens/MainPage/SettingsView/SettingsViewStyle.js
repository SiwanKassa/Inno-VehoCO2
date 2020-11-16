import { StyleSheet } from 'react-native';
import VehoColors from './../../VehoColors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#19388a',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: VehoColors.white,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#254954',
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        marginBottom: 10,
    },
    buttonText:{
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput:{
        width: '90%',
        backgroundColor: VehoColors.primary,
        padding: 12,
        borderRadius: 8,
        color: VehoColors.tertiary,
        fontWeight: 'bold',
        fontSize: 22,
    }
});
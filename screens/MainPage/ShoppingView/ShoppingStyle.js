import { StyleSheet } from 'react-native';
import VehoColors from '../../VehoColors'

export default StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'column',
        backgroundColor: VehoColors.background,
    },
    headerContainer:{
        textAlignVertical: 'center',
        alignItems: 'center',
    },
    subheaderContainer: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        width: '60%',
        paddingLeft: 10
    },
    ecoHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        width: '40%',
        paddingRight: 10
    },
    listContainer: {
        width: '100%',
    },
    mainViewHeader:{
        fontSize: 26,
        fontWeight: 'bold',
        color:'white',
        margin: 15,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});


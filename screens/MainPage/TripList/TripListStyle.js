import { StyleSheet } from 'react-native';
import VehoColors from './../../VehoColors'

export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'center',
        backgroundColor: VehoColors.background,
    },
    headerContainer:{
        flex:1,
        textAlignVertical: 'center',
        alignItems: 'center',
    },
    subheaderContainer: {
        flex:1,
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
        textAlign: 'center',
        paddingRight: 10
    },
    listContainer: {
        flex:12,
        width: '100%',
    },
    flatList:{
      flex:1
    },
    mainViewHeader:{
        fontSize: 26,
        fontWeight: 'bold',
        color:'white',
        margin: 24,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});


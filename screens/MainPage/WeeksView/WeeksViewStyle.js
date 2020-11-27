import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#19388a',
    },
    headerContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    mainViewHeader:{
        fontSize:30,
        color:'white',
        marginTop:30,
    },
    chartContainer:{
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonContainer:{
        flex: 2,
        alignSelf:'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap:'wrap',

    },
    buttonText:{
        color:'white',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13265f',
        width: '40%',
        height:50,
        borderRadius:10,
        margin: 10,
        color:'white',
    },
});
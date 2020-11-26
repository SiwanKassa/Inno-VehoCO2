import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#19388a',


    },
    titleContainer:{
        flex:4,
        alignSelf:'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    title:{
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom:10,
    },
    inputContainer:{
        flex:5,
        alignSelf:'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13265f',
        width: '70%',
        borderRadius:10,
        marginBottom: 10
    },
    logOutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13265f',
        width: '30%',
        borderRadius:10,
        marginBottom:10,
    },

    input: {
        width: '90%',
        fontSize: 20,
        height: 55,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius:10,
    },
});
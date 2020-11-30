import {StyleSheet} from "react-native";
import VehoColors from './../../VehoColors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: VehoColors.background,
    },
    titleContainer:{
        flex:4,
        alignSelf:'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title:{
        fontSize: 32,
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
        width: '100%',
        borderRadius: 10,
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
        backgroundColor: VehoColors.input,
        marginBottom: 10,
        borderRadius:10,
        color: VehoColors.white
    },
    photoContainer: {
        width: '100%',
        height: 60,
        marginTop: 36,
        justifyContent: 'center',
        alignItems: 'center',             
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
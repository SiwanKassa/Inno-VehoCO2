import {StyleSheet} from "react-native";
import VehoColors from '../VehoColors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 16,
        backgroundColor: VehoColors.background,
    },
    titleContainer:{
        flex:4,
        alignSelf:'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    titleText:{
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
       color: 'white',
    },
    inputContainer:{
        flex:5,
        alignSelf:'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13265f',
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#13265f',
        marginBottom: 10,
        borderRadius:10,
    },
    buttonText:{
        color:'white',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerButton:{
        borderColor: '#13265f',
        backgroundColor: '#13265f',
        color:'white',
        padding: 10,
        borderRadius:10,
    },

    input: {
        width: 300,
        fontSize: 20,
        height: 55,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius:10,
    },
    photoContainer: {
        width: "100%",
        height: 60,
        marginTop: 24,
        justifyContent: "center",
        alignItems: "center",
    },
});
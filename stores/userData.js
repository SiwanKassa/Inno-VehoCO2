import { observable,action } from 'mobx'
import {login,register,} from '../Utils/MediaApi'
import {AsyncStorage} from 'react-native'
import * as SecureStore from 'expo-secure-store'
/*state management store for user data*/
class UserData {

    @observable bearerToken={}
    @observable userData={
        username:{},
        password:{},
        fullName:{},
        car:{},

    }
    //login function
    @action doLogin=async (username,password)=>{
   await login(username,password).then((data)=>{
       console.log(data)
       SecureStore.setItemAsync('authData',data)
   })
    }
    ;
    //registration function
    @action doRegister=async(username,password,fullName)=>{
    await register(username,password,fullName).then((data)=>{
        console.log(data)
        SecureStore.setItemAsync('authData',data)

    })
    };
    //bearertoken function
    @action checkForBearerToken=async()=>{
        SecureStore.getItemAsync('authData').then(res=>{
            if(res !=null){

            }else{

            }
        });
    };
    //logout function
    @action doLogOut=()=>{

    }

}

export default UserData;
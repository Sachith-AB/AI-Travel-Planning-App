import { View, Text ,StyleSheet ,TextInput , TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation} from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {useRouter} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../../config/FirebaseConfig.js'


export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  useEffect(() => {
    
    navigation.setOptions({
      headerShown:false
    })
  },[])

  const oneCreateAccount = () => {

      if(!name || !email || !password){
        ToastAndroid.show('All fields are required',ToastAndroid.BOTTOM);
        return; 
      }
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      //console.log(user);
      router.replace('/signin')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorCode,errorMessage);
      // ..
    });
  }

  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.white,
      height:'100%'
    }}>

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        paddingTop:30,
      }}>Create New Account</Text>

      <View style={{
        marginTop:40
      }}>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Name :</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Name '
        onChangeText={(value) => setName(value)}
        ></TextInput>
      </View>

      <View>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Email :</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Email'
        onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>

      <View>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Password :</Text>
        <TextInput 
        secureTextEntry={true} 
        style={styles.input} 
        placeholder='Enter Password Here'
        onChangeText={(value) => setPassword(value)}
        ></TextInput>
      </View>

      <TouchableOpacity onPress={oneCreateAccount} style={{
        padding:15,
        backgroundColor:Colors.primary,
        borderRadius:30,
        marginTop:50,
      }}>
        <Text
          style={{
          color:Colors.white,
          textAlign:'center',
          fontSize:20,
          fontFamily:'outfit'
        }}>Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('auth/sign-in')} style={{
        padding:15,
        backgroundColor:Colors.white,
        borderRadius:30,
        marginTop:10,
        borderWidth:1
      }}>
        <Text style={{
          color:Colors.primary,
          textAlign:'center',
          fontSize:20,
          fontFamily:'outfit'
        }}>Sign In</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.grey,
    fontFamily:'outfit',
    marginTop:5
  }
})
import { View, Text, TextInput , StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation} from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {useRouter} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../../config/FirebaseConfig.js';

export default function SignIn() {

  const navigation = useNavigation();
  const router = useRouter();
  const [email,SetEmail] = useState();
  const [password,setPassword] = useState();

  useEffect(() => {

    navigation.setOptions({
      headerShown:false
    })
  },[])

  const signInUser = () => {

    if(!email || !password){
      ToastAndroid.show('All field are required',ToastAndroid.BOTTOM);
      return;
    }
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      //console.log(user);
      router.replace('/mytrip')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
        if( errorCode == 'auth/invalid-credential'){
          ToastAndroid.show('Email or Password incorrect',ToastAndroid.BOTTOM)
        }
    });
  }

  return (
    <GestureHandlerRootView style={{
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
        fontSize:40,
        paddingTop:30,
      }}>Let's Sign You In</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:28,
        color:Colors.grey,
        marginTop:20
      }}>Welcome Back</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:28,
        color:Colors.grey
      }}>You've been missed...!</Text>

      <View style={{
        marginTop:40
      }}>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Email</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Enter Your Email'
        onChangeText={(value) => SetEmail(value)}></TextInput>
      </View>

      <View>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Password</Text>
        <TextInput 
        secureTextEntry={true} 
        style={styles.input} 
        placeholder='Enter Password Here'
        onChangeText={(value) => setPassword(value)}></TextInput>
      </View>

      <TouchableOpacity onPress={signInUser} style={{
        padding:15,
        backgroundColor:Colors.primary,
        borderRadius:30,
        marginTop:50,
      }}>
        <Text style={{
          color:Colors.white,
          textAlign:'center',
          fontSize:20,
          fontFamily:'outfit'
        }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('auth/sign-up')} style={{
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
        }}>Create Account</Text>
      </TouchableOpacity>

    </GestureHandlerRootView>
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
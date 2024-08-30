import { View, Text, TextInput , StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {useRouter} from 'expo-router'

export default function SignIn() {

  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {

    navigation.setOptions({
      headerShown:false
    })
  },[])

  return (
    <GestureHandlerRootView style={{
      padding:25,
      paddingTop:100,
      backgroundColor:Colors.white,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:40
      }}>Let's Sign You In</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:28,
        color:Colors.grey,
        marginTop:30
      }}>Welcome Back</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:28,
        color:Colors.grey
      }}>You've been missed...!</Text>

      <View style={{
        marginTop:50
      }}>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter Your Email'></TextInput>
      </View>

      <View>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password Here'></TextInput>
      </View>

      <View style={{
        padding:20,
        backgroundColor:Colors.primary,
        borderRadius:15,
        marginTop:50,
      }}>
        <Text style={{
          color:Colors.white,
          textAlign:'center',
          fontSize:20,
          fontFamily:'outfit'
        }}>Sign In</Text>
      </View>

      <TouchableOpacity onPress={() => router.push('auth/sign-up')} style={{
        padding:20,
        backgroundColor:Colors.white,
        borderRadius:15,
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
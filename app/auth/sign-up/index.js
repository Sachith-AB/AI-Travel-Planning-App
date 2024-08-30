import { View, Text ,StyleSheet ,TextInput , TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {useRouter} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    
    navigation.setOptions({
      headerShown:false
    })
  },[])

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
        }}>Name</Text>
        <TextInput style={styles.input} placeholder='Name '></TextInput>
      </View>

      <View>
        <Text style={{
          marginTop:10,
          marginLeft:5,
          fontSize:20,
          fontFamily:'outfit'
        }}>Email</Text>
        <TextInput style={styles.input} placeholder='Email'></TextInput>
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
        }}>Create Account</Text>
      </View>

      <TouchableOpacity onPress={() => router.push('auth/sign-in')} style={{
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
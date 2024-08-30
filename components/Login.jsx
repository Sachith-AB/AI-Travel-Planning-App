import { View, Text , Image, StyleSheet  } from 'react-native'
import React from 'react'
import {Colors} from '@/constants/Colors'
import {useRouter} from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Login() {

  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <Image source={require('./../assets/images/image1.jpg')}
        style={{
          width:'100%',
          height:600,
          
        }}
      />
      <View style={styles.container1 }>
        <Text style={{
          marginTop:10,
          fontSize:30,
          fontFamily:'outfit-bold',
          textAlign:'center',
        }}>Travel Planner</Text>

        <Text style={{
          fontSize:15,
          textAlign:'center',
          fontFamily:'outfit-medium',
          color:Colors.grey
        }}>Discover your next adventure with personalized travel experiences</Text>

        <TouchableOpacity style={styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text style={{
            fontFamily:'outfit',
            color:Colors.white,
            fontSize:20
          }}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container1:{
    backgroundColor:Colors.white,
    marginTop:-20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:'100%',
    alignItems: 'center',       // centers horizontally
  },

  container2: {
    flex: 1,
    justifyContent: 'center',  // centers vertically
    alignItems: 'center',       // centers horizontally
  },

  button:{
    backgroundColor:Colors.primary,
    padding:20,
    borderRadius:99,
    width:300,
    textAlign:'center',
    alignItems: 'center',
    marginTop:'20%'
    
  }
})
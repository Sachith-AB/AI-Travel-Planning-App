import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {Colors} from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripsCard from '../../components/MyTrips/StartNewTripsCard';

export default function Mytrip() {

  const [userTrips,setUserTrips] = useState([]);

  return (
    <View style={{
      padding:25,
      paddingTop:55,
      backgroundColor:Colors.white,
      height:'100%'
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center'
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:30,
        }}>My Trips</Text>

        <Ionicons name="add-circle" size={40} color="black" />
      </View>

      {userTrips.length == 0 ?
        <StartNewTripsCard/> : null
      }
    </View>
  )
}
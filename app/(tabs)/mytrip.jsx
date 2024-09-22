import { View, Text, ActivityIndicator  } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripsCard from '../../components/MyTrips/StartNewTripsCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {auth,db} from './../../config/FirebaseConfig';
import UserTripList from '../../components/MyTrips/UserTripList';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';


export default function Mytrip() {

  const [userTrips,setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    user && getMyTripsData();
  },[user]);

  const getMyTripsData = async () => {

    setLoading(true);
    const q = query(collection(db,"UserTrip"), where ("userEmail", "==", user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    
      setUserTrips(prev => [...prev,doc.data()]);
      setLoading(false);
    })
  }

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

      {loading && <ActivityIndicator size={'large'} color={Colors.primary} style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}/>}

      {userTrips.length == 0 ?
        <StartNewTripsCard/> : <UserTripList userTrips={userTrips}/>
      }
    </View>
  )
}
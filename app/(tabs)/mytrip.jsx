import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripsCard from '../../components/MyTrips/StartNewTripsCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {auth,db} from './../../config/FirebaseConfig';

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

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
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
        <StartNewTripsCard/> : null
      }
    </View>
  )
}
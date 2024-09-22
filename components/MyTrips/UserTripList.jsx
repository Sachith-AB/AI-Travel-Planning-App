import { View, Text , Image, Touchable } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import UserTripCard from './UserTripCard';


export default function UserTripList({userTrips}) {

    const latestTrip = JSON.parse(userTrips[0].tripData);
    
    return (
        <View style={{
            padding:10,
            marginTop:10
        }}>
            <View>
                {
                    latestTrip.url ? (<Image source={latestTrip.url} 
                        style={{
                            width:'100%',
                            height:240,
                            borderRadius:15
                        }}
                    />):(
                    <Image source={require('./../../assets/images/bg.jpg')} 
                        style={{
                            width:'100%',
                            height:240,
                            borderRadius:15
                        }}
                    />
                    )
                }
                <View>
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:15,
                        marginTop:10
                        }}>{userTrips[0].tripPlan.tripDetails.location}
                    </Text>
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'',
                        gap:10
                    }}>
                        <View style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            gap:5
                        }}>
                            <AntDesign name="calendar" size={24} color={Colors.grey} />
                            <Text style={{
                                fontFamily:'outfit-bold',
                                fontSize:15,
                                marginTop:10,
                                color:Colors.grey
                                }}>{moment(latestTrip.startDate).format('DD MMM YYYY')}
                            </Text>
                            
                        </View>
                        <View style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            gap:5
                        }}>
                            <AntDesign name="calendar" size={24} color={Colors.grey} />
                            <Text style={{
                                fontFamily:'outfit-bold',
                                fontSize:15,
                                marginTop:10,
                                color:Colors.grey
                                }}>{moment(latestTrip.endDate).format('DD MMM YYYY')}
                            </Text>
                            
                        </View>
                        <View style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            gap:5
                        }}>
                            <Entypo name="users" size={24} color={Colors.grey} />
                            <Text style={{
                                fontFamily:'outfit-bold',
                                fontSize:15,
                                marginTop:10,
                                color:Colors.grey
                                }}>{latestTrip.travelerCount.title}
                            </Text>
                            
                        </View>
                        
                    </View>

                    <TouchableOpacity>
                        <Text style={{
                        padding:15,
                        backgroundColor:Colors.primary,
                        color:Colors.white,
                        textAlign:'center',
                        borderRadius:15,
                        fontSize:15,
                        fontFamily:'outfit-bold',
                        marginTop:20
                        }}> See Your Plan</Text>
                    </TouchableOpacity>
                    
                </View>
                {
                    userTrips.map((trip , index) => (
                        <View>
                            <UserTripCard trip={trip} key={index}/>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

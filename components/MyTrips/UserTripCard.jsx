import { View, Text , Image} from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors';

export default function UserTripCard({trip}) {

    const convert = (data) => {
        return JSON.parse(data)
    }
    return (
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10,
            padding:10,
            marginTop:10,
            alignItems:'center',
            justifyContent:'center'
        }}>
            {
                    ''.url ? (<Image source={''} 
                        style={{
                            width:'100%',
                            height:240,
                            borderRadius:15
                        }}
                    />):(
                    <Image source={require('./../../assets/images/bg.jpg')} 
                        style={{
                            width:100,
                            height:100,
                            borderRadius:15
                        }}
                    />
                    )
                }
            <View style={{
                display:'flex',
                flexDirection:'column',
                
            }}>
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 15,
                        color: Colors.primary,
                        flexWrap: 'wrap',
                    }}
                    numberOfLines={1}       // Limits to 1 line
                    ellipsizeMode="tail"    // Adds '...' at the end of the text if it's too long
                    >
                    {trip.tripPlan.tripDetails.location}
                </Text>
                <View style={{
                        display:'flex',
                        flexDirection:'colum',
                        
                    }}>
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:15,
                        color:Colors.grey
                        }}>
                        {moment(convert(trip.tripData).startDate).format('DD MMM YYYY')}
                    </Text>
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:13,
                        color:Colors.grey
                        }}>
                        {convert(trip.tripData).travelerCount.title}
                    </Text>
                </View>
            </View>
        </View>
    )
}
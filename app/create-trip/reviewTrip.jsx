import { View, Text , TouchableOpacity } from 'react-native'
import React , {useEffect , useContext} from 'react'
import { Colors } from '../../constants/Colors';
import { useNavigation , useRouter } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { CreateTripContext } from '../../context/CreateTrip';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import moment from 'moment'; 

export default function reviewTrip() {

    const navigation = useNavigation();
    const router = useRouter();
    const [tripData,setTripData] = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    // useEffect(() => {
    //     console.log(tripData)
    // },[tripData]);

    return (
            <View style={{
                padding: 25,
                paddingTop: 75,
                backgroundColor: Colors.white,
                height: '100%'
            }}>
                <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold'

                }}>Review Trip</Text>
                <View  style={{
                    marginTop:20
                }}>
                    <Text style={{
                        fontSize:20,
                        color:Colors.grey,
                        fontFamily:'outfit',
                        
                    }}>
                        Before genarating your trip , please review your selection
                    </Text>
                    <View style={{
                        marginTop:20
                    }}>
                        <View style={{
                            padding:20,
                            display:'flex',
                            flexDirection:'row',
                            gap:10
                            }}>
                            <Entypo name="location-pin" size={34} color="black" />
                            <View>
                                <Text style={{
                                    color:Colors.grey,
                                    fontFamily:'outfit-bold',
                                    fontSize:15
                                }}>Destination</Text>

                                <Text  style={{
                                    color:Colors.primary,
                                    fontFamily:'outfit-bold',
                                    fontSize:20
                                }}>{tripData[0].description}</Text>
                            </View>
                        </View>

                        <View style={{
                            padding:20,
                            display:'flex',
                            flexDirection:'row',
                            gap:10
                            }}>
                            <AntDesign name="calendar" size={34} color="black" />
                            <View>
                                <Text style={{
                                    color:Colors.grey,
                                    fontFamily:'outfit-bold',
                                    fontSize:15
                                }}>Travel Date</Text>

                                <Text  style={{
                                    color:Colors.primary,
                                    fontFamily:'outfit-bold',
                                    fontSize:20
                                }}>{moment(tripData.startDate).format('DD MM') + " To " + moment(tripData.endDate).format("DD MM")} ({tripData.totalDate} days)</Text>
                            </View>
                        </View>

                        <View style={{
                            padding:20,
                            display:'flex',
                            flexDirection:'row',
                            gap:10
                            }}>
                            <FontAwesome6 name="van-shuttle" size={34} color="black" />
                            <View>
                                <Text style={{
                                    color:Colors.grey,
                                    fontFamily:'outfit-bold',
                                    fontSize:15
                                }}>Who's Traveling</Text>

                                <Text  style={{
                                    color:Colors.primary,
                                    fontFamily:'outfit-bold',
                                    fontSize:20
                                }}>{tripData.travelerCount.title}</Text>
                            </View>
                        </View>
                        
                        <View style={{
                            padding:20,
                            display:'flex',
                            flexDirection:'row',
                            gap:10
                            }}>
                            <FontAwesome6 name="sack-dollar" size={34} color="black" />
                            <View>
                                <Text style={{
                                    color:Colors.grey,
                                    fontFamily:'outfit-bold',
                                    fontSize:15
                                }}>Budget</Text>

                                <Text  style={{
                                    color:Colors.primary,
                                    fontFamily:'outfit-bold',
                                    fontSize:20
                                }}>{tripData.budget}</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => router.push('/create-trip/GenarateTrip')}
                >
                    <Text style={{
                        padding:15,
                        backgroundColor:Colors.primary,
                        color:Colors.white,
                        textAlign:'center',
                        borderRadius:15,
                        fontSize:15,
                        fontFamily:'outfit-bold',
                        marginTop:20
                    }}>
                        Build My Trip
                    </Text>
                </TouchableOpacity>
                
            </View>
    )
}
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState , useContext } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { selectTravelesList } from '../../constants/Option';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { CreateTripContext } from '../../context/CreateTrip';


export default function SelectTraveler() {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('');
    const [tripData,setTripData] = useContext(CreateTripContext);
    

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    useEffect(()=> {
        setTripData({...tripData,
            travelerCount:selected
        })
    },[selected])

    // useEffect(() => {
    //     console.log(tripData)
    // },[tripData])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View
                style={{
                    padding: 25,
                    paddingTop: 75,
                    backgroundColor: Colors.white,
                    height: '100%'
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: 'outfit-bold'
                    }}
                >
                    Who's Traveling
                </Text>

                <View
                    style={{
                        marginTop: 20
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'outfit-bold'
                        }}
                    >
                        Choose your travelers
                    </Text>
                    <FlatList
                        data={selectTravelesList}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setSelected(item)}
                                style={{
                                    marginVertical: 10
                                }}
                            >
                                <OptionCard option={item} selected={selected} />
                            </TouchableOpacity>
                        )}
                    />
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
                        marginTop:10
                    }}>
                        Continoue
                    </Text>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    );
}

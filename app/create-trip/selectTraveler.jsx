import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { selectTravelesList } from '../../constants/Option';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView

export default function SelectTraveler() {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('');
    

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

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
                                onPress={() => setSelected(item.title)}
                                style={{
                                    marginVertical: 10
                                }}
                            >
                                <OptionCard option={item} selected={selected} />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

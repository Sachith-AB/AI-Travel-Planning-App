import { View, TextInput, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { useNavigation, useRouter } from 'expo-router';
import axios from 'axios';
import { CreateTripContext } from '../../context/CreateTrip';

export default function SearchPlace() {
    const navigation = useNavigation();
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [tripData,setTripData] = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search',
        });
    }, []);

    const fetchSuggestions = async (text) => {
        const apiKey = "3255ec8339ed41459759d2ddb81b0db1";  
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${text}&key=${apiKey}&language=en&pretty=1`;

        try {
            const response = await axios.get(url);
            const data = response.data.results;
            setSuggestions(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSelectPlace = async (place) => {
        // Extract necessary data from the selected place
        const locationInfo = {
            description: place.formatted, // Full address or description
            geometry: place.geometry, // Contains lat/lng info
            url: place.annotations?.OSM?.url || '', // Use OSM URL if available
            image: place.photos?.[0]?.getUrl({ maxWidth: 400 }) || '', // Use the first photo URL if available
        };

        // Update the trip data context with selected location
        setTripData((prevData) => [...prevData, locationInfo]);
        router.push('/create-trip/selectTraveler');
    };

    // useEffect(() => {
    //     if (tripData.length > 0) {
    //         const latestLocation = tripData[tripData.length - 1]; // Get the last added location
    //         console.log(latestLocation.description); // Access description
    //     }
    // },[tripData])

    return (
        <View style={{ padding: 25, paddingTop: 85, backgroundColor: Colors.white, height: '100%' }}>
            <TextInput
                placeholder="Search"
                value={searchText}
                onChangeText={(text) => {
                    setSearchText(text);
                    if (text.length > 2) {
                        fetchSuggestions(text);
                    }
                }}
                style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    marginTop: 10,
                    padding: 10,
                }}
            />

            {suggestions.length > 0 && (
                <View style={{ marginTop: 10 }}>
                    {suggestions.map((place, index) => (
                        <Text
                            key={index}
                            onPress={() => handleSelectPlace(place)}
                            style={{ padding: 10, borderBottomWidth: 1 }}
                        >
                            {place.formatted}
                        </Text>
                    ))}
                </View>
            )}
        </View>
    );
}

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function searchPlace() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[]);

    return (
    <View style={{
        padding:25,
        paddingTop:85,
        backgroundColor:Colors.white,
        height:'100%'
      }}>
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View>
    )
}
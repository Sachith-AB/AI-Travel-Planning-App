import { View, Text , Image } from 'react-native'
import {useRouter} from 'expo-router';
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTrip';
import { AI_PROMPT } from '../../constants/Option';
import { chatSession } from '../../config/AiModal';
import { doc, setDoc } from "firebase/firestore";
import {auth,db} from './../../config/FirebaseConfig';

export default function GenarateTrip() {

    const [tripData,setTripData] = useContext(CreateTripContext);
    const [loading ,setLoading] = useState(false);
    const router = useRouter();
    const user = auth.currentUser;

    useEffect(() => {
        tripData && genarateAiTrip();
    },[]);

    const genarateAiTrip = async () => {
        setLoading(true)
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}',tripData[0].description)
        .replace('{totalDate}',tripData.totalDate)
        .replace('{totalNight}',tripData.totalDate-1)
        .replace('{traveler}',tripData.travelerCount.title)
        .replace('{budget}',tripData.budget)
        .replace('{totalDate}',tripData.totalDate)
        .replace('{totalNight}',tripData.totalDate-1)

        // console.log(FINAL_PROMPT)

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        // console.log(result.response.text());

        const tripRes = JSON.parse(result.response.text());
        setLoading(false);

        try {
            const docId = Date.now().toString();
        
            // Ensure tripRes is in Firestore-compatible format.
            const tripResSerialized = JSON.parse(JSON.stringify(tripRes)); // Remove any complex types like functions.
        
            // Write to Firestore
            await setDoc(doc(db, "UserTrip", docId), {

                docId:docId,
                userEmail: user.email,         // User email
                tripPlan: tripResSerialized,   // AI result (Ensure it's Firestore compatible)
                tripData: JSON.stringify(tripData), // User selected trip data (stringified to ensure compatibility)
            });
        
            // Navigate to the My Trip page
            router.push('(tabs)/mytrip/');
            
        } catch (error) {
            console.error('Firestore error:', error); // Log any errors for debugging
        }
        
        

        
    }
    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style = {{
                fontFamily:'outfit-bold',
                fontSize:35,
                textAlign:'center'
            }}>Please Wait...</Text>

            <Text style = {{
                marginTop:5,
                fontFamily:'outfit',
                fontSize:20,
                textAlign:'center',
                color:Colors.grey
            }}>We are working to genarate your dream trip</Text>

            <Image style = {{
                height:300,
                width:'100%',
                objectFit:'contain',
            }}
            source = {require('./../../assets/images/okko_car_loop.gif')}></Image>

            <Text style = {{
                marginTop:5,
                fontFamily:'outfit',
                fontSize:20,
                textAlign:'center',
                color:Colors.grey
            }}>Do not Go Back</Text>
        </View>
    )
}
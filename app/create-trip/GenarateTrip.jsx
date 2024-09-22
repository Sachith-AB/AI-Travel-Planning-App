import { View, Text , Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';

export default function GenarateTrip() {
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
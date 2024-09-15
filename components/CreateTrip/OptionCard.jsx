import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selected}) {
    
    return (
        <View style={[{
            padding:25,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:Colors.lightgrey,
            borderRadius:15
        },selected === option.title && {
            borderWidth:3,
            //borderColor:Colors.dark
        }]}>
            <View>
                <Text style={{
                    fontSize:20,
                    fontFamily:'outfit-bold',
                }}>{option.title}</Text>
                <Text style={{
                    fontSize:15,
                    fontFamily:'outfit-bold',
                    color:Colors.grey,
                    display:'flex',
                    flexWrap:'wrap'
                }}>{option.desc}</Text>
            </View>
            <Text style={{
                fontSize:40
            }}>{option.icon}</Text>
        </View>
    )
}
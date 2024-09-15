import { View, Text , TouchableOpacity, ToastAndroid } from 'react-native'
import React , { useEffect, useState , useContext} from 'react'
import { useNavigation , useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { differenceInDays } from 'date-fns';
import { CreateTripContext } from '../../context/CreateTrip';

export default function selectDate() {

    const navigation = useNavigation();
    const router = useRouter();
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [tripData,setTripData] = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    const onDateChange = (date,type) => {
        console.log(date,type);
        if(type === 'START_DATE'){
            setStartDate(moment(date))
        }else{
            setEndDate(moment(date))
        }
    }

    const onDateSelection = () => {

        if(!startDate && !endDate){
            ToastAndroid.show('Please select Start and End Date',ToastAndroid.LONG)
        }
         // Ensure startDate and endDate are valid Date objects
        const totalDate = differenceInDays(new Date(endDate), new Date(startDate));
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalDate:totalDate
        })
    }

    return (
        <GestureHandlerRootView>
            <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold'

            }}>Travel Date</Text>
            <View style={{
                marginTop:30
            }}>
                <CalendarPicker onDateChange={onDateChange} 
                allowRangeSelection = {true}
                minDate={new Date()}
                maxRangeDuration={5}
                selectedRangeStyle = {{
                    backgroundColor:Colors.primary,
                }}
                selectedDayTextStyle={{
                    color:Colors.white
                }}
                />
            </View>

            <TouchableOpacity
                onPress={onDateSelection}>
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
                        Continoue
                    </Text>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    )
}
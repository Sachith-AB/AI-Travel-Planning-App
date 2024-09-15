import { View, Text , FlatList , TouchableOpacity  } from 'react-native'
import React ,{ useEffect , useState , useContext} from 'react'
import { useNavigation , useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { selectBudgetList } from '../../constants/Option';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTrip';
import { ToastAndroid } from 'react-native';

export default function selectBudget() {

    const navigation = useNavigation();
    const router = useRouter();
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
            budget:selected.title
        })
    },[selected])

    // useEffect(() => {
    //     console.log(tripData)
    // },[tripData])

    const navigate = () => {
        if(!selected){
            ToastAndroid.show('Selected Your Budget',ToastAndroid.LONG)
            return;
        }else{
            router.push('/create-trip/reviewTrip')
        }
    }

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

            }}>Choose Budget</Text>

            <View style={{
                matginTop:10
            }}>
                <Text style={{
                    fontSize:20,
                    color:Colors.grey,
                    fontFamily:'outfit',
                    
                }}>
                    Choose sependeing habits for your trip
                </Text>

                <View style={{
                    marginTop:20
                }}>
                    <FlatList
                            data={selectBudgetList}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setSelected(item)}
                                    style={{
                                        marginVertical: 10,
                                        
                                    }}
                                >
                                    <OptionCard option={item} selected={selected} />
                                </TouchableOpacity>
                            )}
                        />
                </View>

                <TouchableOpacity onPress={navigate}>
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
        </View>
    )
}
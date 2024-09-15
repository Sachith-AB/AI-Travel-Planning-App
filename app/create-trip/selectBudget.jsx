import { View, Text , FlatList , TouchableOpacity  } from 'react-native'
import React ,{ useEffect , useState , useContext} from 'react'
import { useNavigation , useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { selectBudgetList } from '../../constants/Option';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTrip';

export default function selectBudget() {

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
            budget:selected.title
        })
    },[selected])

    useEffect(() => {
        console.log(tripData)
    },[tripData])

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

            </View>
        </View>
    )
}
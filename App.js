import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import styles from './Estilo'

const Stack = createNativeStackNavigator();

//janela 1
const Janela1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PRIMEIRA JANELA</Text>
      <TouchableOpacity
        style={{borderRadius:60,
              borderWidth:1, 
              borderColor:'blue',
              padding:16, 
              margin:20}}
      onPress={()=>{navigation.navigate('Janela2')}}>
        <Text>TROCAR JANELA</Text>
      </TouchableOpacity>
    </View>
  )
};

//janela 2
const Janela2 = () => {
  return(
    <View style={styles.container}>
      <Text>Segunda Janela</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Janela1">
       <Stack.Screen name = 'Janela1' component={Janela1}
          options={{title: "Primeira Janela",
          headerTintColor:'blue',
          statusBarColor:'green',
          navigationBarColor:'red'}} />
       <Stack.Screen name='Janela2' component={Janela2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


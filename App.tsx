import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/HomeScreen';
import DetailTravel from './app/screens/DetailTravel';
import TOURS from './app/config/TOURS';
import { Tour } from './app/types'

export type RootStackParamList = {
  Home: undefined;
  DetailTravel: { tour: Tour };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
  screenOptions={{
    // headerStyle: {
    //   backgroundColor: '#fff', // Change this to any color that suits your design
    // },
    // headerTintColor: '#000', // Changes the back button and title text color to black
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
    headerShown: false
  }}
>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="DetailTravel" component={DetailTravel} />
</Stack.Navigator>
    </NavigationContainer>
  );
}

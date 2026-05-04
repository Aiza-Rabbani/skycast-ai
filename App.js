import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AISpeakerScreen from './screens/AISpeakerScreen';
import TravelTipsScreen from './screens/TravelTipsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />

        {/* AI SPEAKER SCREEN */}
        <Stack.Screen name="AISpeaker" component={AISpeakerScreen} />

        {/* EXTRA SCREEN */}
        <Stack.Screen name="TravelTips" component={TravelTipsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
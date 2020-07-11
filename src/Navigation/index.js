import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home'
import Cart from '../Screens/Cart'

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default Navigation
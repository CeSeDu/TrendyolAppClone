import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import tw from 'twrnc';
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator  />
    </NavigationContainer>
  );
}

import React from 'react';
import {Text, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'

export default function App() {
  return (
    <NavigationContainer>
       <Navigation/>
    </NavigationContainer>
  );
}
import React from 'react'
import { View, Text } from 'react-native'
import Contact from '../screens/Contact'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ContactStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="contact" component={Contact} options={{title: "Contact"}} />
        </Stack.Navigator>
    )
}

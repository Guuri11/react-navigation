import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStack(props) {

    const { navigation } = props

    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title: "Home", headerLeft: () => <Text onPress={ () => navigation.openDrawer() }  >Menu</Text>, headerRight: () => <Text onPress={ () => navigation.openDrawer() }  >Menu</Text>}} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

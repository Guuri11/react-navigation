import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function About(props) {

    const {navigation} = props


    return (
        <View>
            <Text>About</Text>

            <Button title="Home" onPress={() => navigation.navigate("home", {screen: "home"})} />
            <Button title="Contact" onPress={() => navigation.navigate("contact", {screen: "contact"})} />
        </View>
    )
}

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Home(props) {

    const {navigation} = props

    return (
        <View>
            <Text>Home</Text>

            <Button title="About" onPress={() => navigation.navigate("about", {screen: "about"})} />
            <Button title="Contact" onPress={() => navigation.navigate("contact", {screen: "contact"})} />
        </View>
    )
}

const styles = StyleSheet.create({})

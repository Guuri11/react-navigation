import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Contact(props) {

    const {navigation} = props


    return (
        <View>
            <Text>Contact</Text>

            <Button title="About" onPress={() => navigation.navigate("about", {screen: "about"})} />
            <Button title="Home" onPress={() => navigation.navigate("home", {screen: "contachome"})} />
        </View>
    )
}

const styles = StyleSheet.create({})

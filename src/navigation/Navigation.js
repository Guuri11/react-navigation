import React from 'react'
import About from '../screens/About'
import Contact from '../screens/Contact'
import {createDrawerNavigator} from "@react-navigation/drawer"
import Home from '../screens/Home'
import HomeStack from './HomeStack'
import ContactStack from './ContactStack'
import AboutStack from './AboutStack'


const Drawer = createDrawerNavigator()

export default function Navigation() {

    return (
            <Drawer.Navigator>

                <Drawer.Screen name="home" component={HomeStack} options={{title: "Home"}} />
                <Drawer.Screen name="contact" component={ContactStack} options={{title: "Contact"}} />
                <Drawer.Screen name="about" component={AboutStack} options={{title: "About"}} />

            </Drawer.Navigator>
        )

}
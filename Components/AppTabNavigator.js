import React from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../Screens/BookDonateScreen'
import BookRequestScreen from '../Screens/BookRequestScreen'
import { AppStackNavigator } from './AppStackNavigator'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {
        screen : AppStackNavigator,
        navigationOptions: {
            tabBarIcon : <Image source = {require('../assets/request-list.png')} style = {{width:20, height:20}}/>,
            tabBarLabel : "Donate Book"
        }
    },
    RequestBooks : {
        screen : BookRequestScreen,
        navigationOptions: {
            tabBarIcon : <Image source = {require('../assets/request-book.png')} style = {{width:20, height:20}}/>,
            tabBarLabel : "Request Book"
        }
    }
})
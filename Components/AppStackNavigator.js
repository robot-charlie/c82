import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'

import BookDonateScreen from '../Screens/BookDonateScreen'
import ReceiverDetailScreen from '../Screens/ReceiverDetailsScreen'

export const AppStackNavigator= createStackNavigator( {
    BookDonateList : {
        screen: BookDonateScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    ReceiverDetails : {
        screen : ReceiverDetailScreen,
        navigationOptions:{
            headerShown: false
        }
    },
   },
   {
       initialRouteName : 'BookDonateList'
   }
   )

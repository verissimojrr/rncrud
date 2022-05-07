import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'



import UserForm from './UserForm'
import UserList from './UserList'

import {Button, Icon} from 'react-native-elements'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="UserList"
            screenOptions={screenOptions}
            >
                <Stack.screen
                name="UserForm"
                options={{title: 'Formulario de usuarios'}}
                component={UserForm}
                />
                <Stack.screen
                name="UserList"
                component={UserList}
                options={() => {
                    return {
                        title: "Lista de usuarios"
                        headerRight: {() => (
                            <Button
                                onPress: {() => {
                                    navigation.navigate("UserForm")
                                }}
                                type: 'clear',
                                icon: <Icon name="add" size={25} color="white" />
                        )}
                    }
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )  
}

const screenOptions =  {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTintStyle: {
        fontWeight: 'bold'
    },
    headerShown: true
}
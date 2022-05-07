import { StatusBar } from 'expo-status-bar'
import React from 'react' 
import { Text, SafeAreaView, /*StyleSheet*/ } from 'react-native'

//import { NavigationContainer } from '@react-navigation/native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserForm from './views/UserForm'
import UserList from './views/UserList'
//import UserStack from './views/UserStack'

//const Stack = createNativeStackNavigator()


export default props => {
    return (
        <SafeAreaView style={{flex: 1}}/*style={styles.container}*/ >
            <UserForm/>
            <UserList/>
        </SafeAreaView>
    )
}

/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })*/
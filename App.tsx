import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRoutes } from './app/enums'
import { SignupScreen, StartScreen } from './app/screens'

const Stack = createNativeStackNavigator()

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={AppRoutes.START_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppRoutes.START_SCREEN} component={StartScreen} />
      <Stack.Screen name={AppRoutes.SIGNUP_SCREEN} component={SignupScreen} />
    </Stack.Navigator>
  )
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App

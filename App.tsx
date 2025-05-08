import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AppRoutes } from './app/enums'
import { StartScreen } from './app/screens'

const Stack = createNativeStackNavigator()

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={AppRoutes.START_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppRoutes.START_SCREEN} component={StartScreen} />
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

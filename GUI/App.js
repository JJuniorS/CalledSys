import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/LoginView';
import Chamados from './src/pages/Chamados';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }} 
      >
        <Stack.Screen  name="Login"
         component={Login}
        />
        <Stack.Screen  name="Chamados" component={Chamados}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

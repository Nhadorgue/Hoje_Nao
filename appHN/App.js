import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { useState } from 'react';
import { styles } from './src/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Cadastrar from './screens/Cadastrar';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Cadastrar" component={Cadastrar} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );

}
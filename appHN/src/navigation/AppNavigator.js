import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import Cadastrar from '../screens/Auth/CadastrarScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName='Auth'>
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="App" component={TabNavigator} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
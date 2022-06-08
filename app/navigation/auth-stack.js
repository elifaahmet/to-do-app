import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen name="Sign In" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStack;

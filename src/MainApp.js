import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Details from './screens/details';
import LoginScreen from './screens/login';
import SignupPage from './screens/signup';
import ProfilePage from './screens/ProfilePage';
import ChefDetails from './screens/ChefDetails';
import ChefPage from './screens/ChefPage';
import LiveCooking from './screens/LiveCooking';
import SearchPage from './screens/SearchPage';
import SplashScreen from './screens/splash';

const Stack = createNativeStackNavigator();
const MainApp = ({
  params,
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChefDetails"
          component={ChefDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChefPage"
          component={ChefPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LiveCooking"
          component={LiveCooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;

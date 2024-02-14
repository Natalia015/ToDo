import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import IntroScreen from '../screens/IntroScreen/IntroScreen';

export type RootStackParamList = {
  INTRO_SCREEN: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'INTRO_SCREEN'} component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

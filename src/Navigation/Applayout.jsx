import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ChatScreen from '../Screen/ChatScreen';
import ChatModule from '../Page/ChatModule';
import ImagePreviewScreen from '../ImagePreview/ImagePreviewScreen';

const Stack = createNativeStackNavigator();

const AppLayout = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChatModule">
          <Stack.Screen
            name="ChatModule"
            component={ChatModule}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ImagePreview"
            component={ImagePreviewScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppLayout;

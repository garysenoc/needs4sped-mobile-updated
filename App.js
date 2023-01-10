import { StyleSheet, Text, View, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  transitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

import Welcome from './screens/Welcome';
import Welcome2 from './screens/Welcome2';
import Welcome3 from './screens/Welcome3';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import ABC from './screens/ABC';
import Numbers from './screens/Numbers';
import LetterRecognition from './screens/LetterRecognition';
import ObjectRecognition from './screens/ObjectRecognition';
import CountingObjects from './screens/CountingObjects';
import RandomQuiz from './screens/RandomQuiz';
import Account from './screens/Account';
import EditAccount from './screens/EditAccount';
import Complete1 from './screens/Complete1';
import Complete2 from './screens/Complete2';
import Complete3 from './screens/Complete3';
import Lesson1 from './screens/Lesson1';
import Lesson2 from './screens/Lesson2';
import Lesson3 from './screens/Lesson3';
import Lesson4 from './screens/Lesson3';
import RandomQuizResult from './screens/RandomQuizResult';
import LetterRecognitionResult from './screens/LetterRecognitionResult';
import ObjectRecognitionResult from './screens/ObjectRecognitionResult';
import CountingObjectsResult from './screens/CountingObjectsResult';
import { StateProvider } from './context/StateContext';
import * as SplashScreen from 'expo-splash-screen';

const fetchFonts = () => {
  return Font.loadAsync({
    mulish_black: require('./assets/fonts/mulish_black.ttf'),
    mulish_semibold: require('./assets/fonts/Mulish-SemiBold.ttf'),
    mulish_regular: require('./assets/fonts/Mulish-Regular.ttf'),
    mulish_bold: require('./assets/fonts/Mulish-Bold.ttf'),
    mulish_extrabold: require('./assets/fonts/Mulish-ExtraBold.ttf'),
    mulish_medium: require('./assets/fonts/Mulish-Medium.ttf'),

    opensans_bold: require('./assets/fonts/OpenSans-Bold.ttf'),
    opensans_xbold: require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    opensans_regular: require('./assets/fonts/OpenSans-Regular.ttf'),
    opensans_semibold: require('./assets/fonts/OpenSans-SemiBold.ttf'),

    mon_bold: require('./assets/fonts/Montserrat-Bold.ttf'),
    mon_reg: require('./assets/fonts/Montserrat-Regular.ttf'),
    mon_semibold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    mon_black: require('./assets/fonts/Montserrat-Black.ttf'),

    roboto_reg: require('./assets/fonts/Roboto-Regular.ttf'),
    roboto_med: require('./assets/fonts/Roboto-Medium.ttf'),
    roboto_bold: require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    easing: Easing.linear,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

export default function App() {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/sounds/letter.mp3'),
    );
    setSound(sound);
    await sound.playAsync();
  }

  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const Stack = createNativeStackNavigator();
  const [fontLoaded, setfontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <StateProvider>
        <AppLoading
          startAsync={fetchFonts}
          onError={() => console.log('Error')}
          onFinish={() => {
            setfontLoaded(true);
          }}
        />
      </StateProvider>
    );
  }
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
          initialRouteName='Login'
        >
          <Stack.Screen
            name='Welcome'
            component={Welcome}
          />
          <Stack.Screen
            name='Welcome2'
            component={Welcome2}
          />
          <Stack.Screen
            name='Welcome3'
            component={Welcome3}
          />
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='ABC'
            component={ABC}
          />
          <Stack.Screen
            name='Numbers'
            component={Numbers}
          />
          <Stack.Screen
            name='LetterRecognition'
            component={LetterRecognition}
          />
          <Stack.Screen
            name='ObjectRecognition'
            component={ObjectRecognition}
          />
          <Stack.Screen
            name='CountingObjects'
            component={CountingObjects}
          />
          <Stack.Screen
            name='RandomQuiz'
            component={RandomQuiz}
          />
          <Stack.Screen
            name='Account'
            component={Account}
          />
          <Stack.Screen
            name='LetterRecognitionResult'
            component={LetterRecognitionResult}
          />
          <Stack.Screen
            name='ObjectRecognitionResult'
            component={ObjectRecognitionResult}
          />
          <Stack.Screen
            name='CountingObjectsResult'
            component={CountingObjectsResult}
          />
          <Stack.Screen
            name='RandomQuizResult'
            component={RandomQuizResult}
          />
          <Stack.Screen
            name='EditAccount'
            component={EditAccount}
          />
          <Stack.Screen
            name='Complete1'
            component={Complete1}
          />
          <Stack.Screen
            name='Complete2'
            component={Complete2}
          />
          <Stack.Screen
            name='Complete3'
            component={Complete3}
          />
          <Stack.Screen
            name='Lesson1'
            component={Lesson1}
          />
          <Stack.Screen
            name='Lesson2'
            component={Lesson2}
          />
          <Stack.Screen
            name='Lesson3'
            component={Lesson3}
          />
          <Stack.Screen
            name='Lesson4'
            component={Lesson3}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


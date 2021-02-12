/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import image from './learning.png';

const App: () => React$Node = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.logoText}>
          <Text style={styles.logo}>Lysée</Text>
        </View>
      </ImageBackground>
      <View style={styles.header}></View>

      <View style={styles.hero}>
        <Text style={styles.heroText}>Bienvenue!</Text>
        <Text>C'est une belle journée</Text>
      </View>

      <View style={styles.button}>
        <Button onPress={() => setCount(count + 1)} title="Click me" />
      </View>
      <View style={styles.count}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    height: 300,
    width: 500,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  logo: {
    fontSize: 30,
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default App;

import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {HorizontalSwipeGestureHandler} from './components/HorizontalSwipeGestureHandler';
import {useNavigation} from '@react-navigation/native';

export const ScreenA = () => {
  const navigation = useNavigation();

  const handleRightSwipe = () => {
    Alert.alert('Hold on!', 'Are you sure you want to leave?', [
      {text: 'Cancel', style: 'cancel', onPress: () => {}},
      {text: 'Yes', style: 'destructive', onPress: () => {}},
    ]);
  };

  const handleLeftSwipe = () => {
    navigation.navigate('ScreenB');
  };

  return (
    <HorizontalSwipeGestureHandler
      onRightSwipe={handleRightSwipe}
      onLeftSwipe={handleLeftSwipe}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Screen A</Text>
      </View>
    </HorizontalSwipeGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

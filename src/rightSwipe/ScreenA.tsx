import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { PanRightSwipeGestureHandler } from './index';

export const ScreenA = () => {
  // Handling custom events
  const handleRightSwipe = () => {
    Alert.alert('Hold on!', 'Are you sure you want to leave?', [
      { text: 'Cancel', style: 'cancel', onPress: () => {} },
      { text: 'Yes', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <PanRightSwipeGestureHandler onHandleRightSwipe={handleRightSwipe}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Screen A</Text>
      </View>
    </PanRightSwipeGestureHandler>
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

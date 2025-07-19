import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { usePreventRightSwipe } from './hooks/usePreventRightSwipe';

export const ScreenE = () => {
  usePreventRightSwipe();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Screen E</Text>
      <Text style={styles.text}>Disabled the default right swipe gesture using custom hook.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
});

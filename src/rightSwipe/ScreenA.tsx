import React from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { PanRightSwipeGestureHandler } from './index';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RightSwipeGestureParamList, RightGestureRoute} from '../navigation/rightSwipeGestureStack';

export const ScreenA = () => {
  const navigation = useNavigation<NavigationProp<RightSwipeGestureParamList>>();

  // Handling custom events
  const handleRightSwipe = () => {
    console.log('Right swipe detected');
    Alert.alert('Hold on!', 'Are you sure you want to leave?', [
      { text: 'Cancel', style: 'cancel', onPress: () => {} },
      { text: 'Yes', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <PanRightSwipeGestureHandler onHandleRightSwipe={handleRightSwipe}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Screen A</Text>
        <Button
          title="Go to Screen B"
          onPress={() => navigation.navigate(RightGestureRoute.ScreenB)}
        />
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

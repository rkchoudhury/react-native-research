import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CarouselContainer from 'react-native-reanimated-carousel';
import { RightGestureRoute, RightSwipeGestureParamList } from '../navigation/rightSwipeGestureStack';

const { width, height } = Dimensions.get('window');

export const ScreenC = () => {
  const navigation =
    useNavigation<NavigationProp<RightSwipeGestureParamList>>();

  const renderItem = (index: number) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{index}</Text>
        <Text style={styles.title}>Heyy there</Text>
        <Text style={styles.title}>Heyy there</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Screen C</Text>
      <CarouselContainer
        style={{ backgroundColor: 'skyblue' }}
        width={width}
        height={height / 2}
        data={[1, 2, 3]}
        renderItem={({ index }) => renderItem(index)}
        autoPlay={false}
        mode={'parallax'}
        enabled={true}
      />
      <Button
        title="Go to Screen D"
        onPress={() => navigation.navigate(RightGestureRoute.ScreenD)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

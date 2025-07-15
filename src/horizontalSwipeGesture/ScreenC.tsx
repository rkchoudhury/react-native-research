import React from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { HorizontalSwipeGestureHandler } from './components/HorizontalSwipeGestureHandler';
import { useNavigation } from '@react-navigation/native';
import CarouselContainer from 'react-native-reanimated-carousel';

const { width, height } = Dimensions.get('window');

export const ScreenC = () => {
  const navigation = useNavigation();

  const handleRightSwipe = () => {
    // navigation.navigate('ScreenB'); //-> it is pushing a new ScreenB (Previouly it was using the existing ScreenB)
    navigation.goBack();
  };

  const handleLeftSwipe = () => {
    Alert.alert('Hold on!', 'We are at the end game!', [
      { text: 'Okay', style: 'destructive', onPress: () => { } },
    ]);
  };

  const renderItem = (index: number) => {
    return (
      <View
        style={styles.card}>
        <Text style={styles.title}>{index}</Text>
        <Text style={styles.title}>Heyy there</Text>
        <Text style={styles.title}>Heyy there</Text>
      </View>
    );
  };

  return (
    <HorizontalSwipeGestureHandler
      onRightSwipe={handleRightSwipe}
      onLeftSwipe={handleLeftSwipe}>
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
      </View>
    </HorizontalSwipeGestureHandler>
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
  }
});

/**
 * Question: 
 * As per me navigation.navigate will use the existing screen if the screen is already there in the stack. Can you check and see if the latest navigtaion has some different behaviour on this
 * 
 * Chat GPT:
 * 
 * You are correct that in older versions of React Navigation, navigation.navigate('ScreenA') would reuse the existing ScreenA if it was already in the stack (unless you passed new params). However, in React Navigation v6 and later, the behavior is:

    If the target screen (ScreenA) is already in the stack and you call navigate('ScreenA') with the same params, it will pop to that screen instead of pushing a new one.
    If you pass different params, it will push a new instance.
    If you use nested navigators or custom screen keys, the behavior may differ.


  There have been some subtle changes in v6+ regarding how params and screen keys are handled, but the core behavior remains: navigate should not push a new screen if the target is already in the stack with the same params.

  If you are seeing a new ScreenA being pushed, possible reasons include:

      You are using nested navigators and the route is not unique.
      You are passing new params (even undefined vs. omitted can matter).
      There is a bug or change in your navigator setup.


    To ensure the latest behavior, you can check the official React Navigation docs for navigate: https://reactnavigation.org/docs/navigation-prop/#navigate

    If you want to guarantee popping to the existing ScreenA, you can use:
    navigation.navigate({ name: 'ScreenA', merge: true });

    or, if ScreenA is the root:

    navigation.popToTop();

 */
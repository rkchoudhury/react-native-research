import React from 'react';
import {View, Text, StyleSheet, Alert, Dimensions} from 'react-native';
import {HorizontalSwipeGestureHandler} from './components/HorizontalSwipeGestureHandler';
import {useNavigation} from '@react-navigation/native';
// import CarouselContainer from 'react-native-reanimated-carousel';

const {width, height} = Dimensions.get('window');

export const ScreenC = () => {
  const navigation = useNavigation();

  const handleRightSwipe = () => {
    // navigation.navigate('ScreenB');
    navigation.goBack();
  };

  const handleLeftSwipe = () => {
    Alert.alert('Hold on!', 'We are at the end game!', [
      {text: 'Okay', style: 'destructive', onPress: () => {}},
    ]);
  };

  const renderItem = (index: number) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
        {/* <CarouselContainer
          style={{backgroundColor: 'skyblue'}}
          width={width}
          height={height / 2}
          data={[1, 2, 3]}
          renderItem={({index}) => renderItem(index)}
          autoPlay={false}
          mode={'parallax'}
          enabled={true}
        /> */}
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
});

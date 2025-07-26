import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import MovieList from '../../components/MovieList';
import { useNowPlayingMovies } from '../../hooks/useNowPlayingMovies';

export const Browse = () => {
  const nowPlayingMovie = useNowPlayingMovies();

  return (
    <View style={styles.container}>
      {nowPlayingMovie?.length > 0 ? (
        <MovieList movies={nowPlayingMovie} />
      ) : (
        <View style={styles.indicator}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

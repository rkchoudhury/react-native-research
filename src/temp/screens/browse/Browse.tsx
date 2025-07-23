import React from 'react';
import { View } from 'react-native';

import MovieList from '../../components/MovieList';
import { useNowPlayingMovies } from '../../hooks/useNowPlayingMovies';

export const Browse = () => {
  const nowPlayingMovie = useNowPlayingMovies();

  return (
    <View>
      {nowPlayingMovie?.length && <MovieList movies={nowPlayingMovie} />}
    </View>
  );
};

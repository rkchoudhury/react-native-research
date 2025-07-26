import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MovieList from '../../components/MovieList';
import { useSearchMovies } from '../../hooks/useSearchMovies';

export const Search = () => {
  const { searchedMovies, showNoResultsMessage } = useSearchMovies('');

  return (
    <View style={styles.container}>
      {searchedMovies?.length > 0 && <MovieList movies={searchedMovies} />}
      {showNoResultsMessage && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No results found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import MovieCard from './MovieCard';
import { IMovie } from '../model/movieModel';

interface IProps {
  movies: IMovie[];
}

const MovieList = ({ movies }: IProps) => {
  return (
    <FlatList
      data={movies}
      numColumns={2}
      renderItem={({ item }) => <MovieCard key={item.id} movie={item} />}
      columnWrapperStyle={styles.content}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default MovieList;

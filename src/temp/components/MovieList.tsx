import React from 'react';

import MovieCard from './MovieCard';
import { IMovie } from '../model/movieModel';
import { FlatList } from 'react-native';

interface IProps {
  movies: IMovie[];
}

const MovieList = ({ movies }: IProps) => {
  return (
    <FlatList
      data={movies}
      numColumns={2}
      renderItem={({ item }) => <MovieCard key={item.id} movie={item} />}
    />
  );
};

export default MovieList;

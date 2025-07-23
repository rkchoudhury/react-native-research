import React from 'react';

import { IMovie } from '../model/movieModel';
import { CDN_IMAGE_URL } from '../utils/constants';
import { Image, StyleSheet, View } from 'react-native';

interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  const { poster_path } = movie;

  return (
    <View>
      <Image
        source={{ uri: `${CDN_IMAGE_URL}${poster_path}` }}
        style={styles.image}
        borderRadius={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 36,
    height: 36,
  },
});

export default MovieCard;

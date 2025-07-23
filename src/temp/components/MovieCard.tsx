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
        resizeMode={'stretch'}
        height={180}
        width={180}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginRight: 5,
  },
});

export default MovieCard;

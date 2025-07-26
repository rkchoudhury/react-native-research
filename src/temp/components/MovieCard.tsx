import React, { useState } from 'react';

import { IMovie } from '../model/movieModel';
import { CDN_IMAGE_URL } from '../utils/constants';
import { Image, StyleSheet, View, Text } from 'react-native';

interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  const { poster_path, title } = movie;
  const [loading, setLoading] = useState(true);

  return (
    <View>
      {loading && (
        <View style={styles.altContainer}>
          <Text style={styles.altText}>{title}</Text>
        </View>
      )}
      <Image
        source={{ uri: `${CDN_IMAGE_URL}${poster_path}` }}
        style={styles.image}
        borderRadius={10}
        resizeMode={'stretch'}
        height={180}
        width={180}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginRight: 5,
  },
  altContainer: {
    position: 'absolute',
    height: 180,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    zIndex: 1,
  },
  altText: {
    color: '#888',
    fontSize: 16,
  },
});

export default MovieCard;

import { useCallback, useEffect, useState } from 'react';

import { movieService } from '../services/movieService';
import { MOVIE_TYPE } from '../enums/movieTypeEnum';

export const useNowPlayingMovies = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

  const getNowPlayingMovies = useCallback(async () => {
    const movies = await movieService(MOVIE_TYPE.NOW_PLAYING);
    setNowPlayingMovie(movies?.results ?? []);
  }, []);

  useEffect(() => {
    !nowPlayingMovie?.length && getNowPlayingMovies();
  }, [getNowPlayingMovies, nowPlayingMovie]);

  return nowPlayingMovie;
};

import { useEffect, useState } from 'react';

import { movieSearchService } from '../services/movieService';
import { SEARCH_DEBOUNCE_TIME } from '../utils/constants';
import { IMovie } from '../model/movieModel';

export const useSearchMovies = () => {
  const [searchedText, setSearchedText] = useState<string>('');
  const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);
  const [showNoResultsMessage, setShowNoResultsMessage] =
    useState<boolean>(false);

  useEffect(() => {
    const handleMovieSearch = async () => {
      // The API will always happens with the new searchedText value that are entered within the offset time
      const movies = await movieSearchService(searchedText);
      if (movies?.results?.length) {
        setSearchedMovies(movies?.results);
        setShowNoResultsMessage(false);
      } else {
        setSearchedMovies([]);
        setShowNoResultsMessage(searchedText?.length > 0);
      }
    };

    // Calling the API after each 200msec. Waiting for the keys that should be entered withing the offset time.
    const debounceTimmer = setTimeout(() => {
      handleMovieSearch();
    }, SEARCH_DEBOUNCE_TIME);

    // Stopping the previous API call by clearing the timeout
    return () => clearTimeout(debounceTimmer);
  }, [searchedText, setSearchedMovies, setShowNoResultsMessage]);

  return {
    searchedMovies,
    showNoResultsMessage,
    setSearchedText,
  };
};

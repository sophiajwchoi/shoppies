import { useState } from 'react';
import NominationList from './NominationList';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SocialMediaShare from './SocialMediaShare';
require("dotenv").config(); 
const API_KEY = process.env.REACT_APP_OMDb_API_KEY;

const SearchPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [nominationList, setNominationList] = useState([]);
  const [query, setQuery] = useState();
  const [resultStatus, setResultStatus] = useState('');
  const [status, setStatus] = useState('Nominations');

  const setQueryInput = async (input) => {
    setQuery(input);
    await searchQuery(input);
  };

  const searchQuery = async (input) => {
    if (input !== '') {
      const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${input}&type=movie`;
      try {
        const response = await fetch(API_URL);
        const movies = await response.json();

        if (movies.Response === 'True') {
          setMovieList(movies.Search);
          setResultStatus('');
        } else {
          setMovieList([]);
          setResultStatus(movies.Error);
        }
      } catch (error) {
        console.log('Unable to search:', error);
        setMovieList([]);
        setResultStatus(error);
      }
    } else {
      setResultStatus('Nothing to search');
      setMovieList([]);
    }
  };

  const removeNomination = (movie) => {
    try {
      const alteredNominationList = nominationList.filter(
        (m) => m.imdbID !== movie.imdbID
      );

      setNominationList(alteredNominationList);
      if (nominationList.length < 6) {
        setStatus('Nominations');
      }
    } catch (error) {
      console.log('Unable to remove the movie from the nomination list', error);
    }
  };

  const addNomination = (movie) => {
    try {
      const exist = nominationList.some((m) => m.imdbID === movie.imdbID);

      if (!exist && nominationList.length < 5) {
        setNominationList(nominationList.concat([movie]));
      }
      if (nominationList.length === 4) {
        setStatus('You\'ve selected 5 movies 🎉!');
      }
    } catch (error) {
      console.log('Unable to add to the nomination list ', error);
    }
  };

  return (
    <div className='container'>
      <div className='title'>
        <h2>The shoppies</h2>
        <button
          type='button'
          className='btn btn-secondary btn-md float-right'
          disabled
        >
          {status} ({nominationList.length})
        </button>
      </div>
      <h5 className='clear'>Nominate up to 5 favourite movies!</h5>
      <div className='row'>
        <div className='col SearchBar'>
          <h5>
            Movie Title:
            <SearchBar input={query} onChange={setQueryInput}></SearchBar>
          </h5>
        </div>
      </div>
      <div className='row'>
        <SearchResults
          query={query}
          movieList={movieList}
          addNomination={addNomination}
          nominationList={nominationList}
          resultStatus={resultStatus}
        ></SearchResults>
        <NominationList
          nominationList={nominationList}
          unNominate={removeNomination}
        ></NominationList>
      </div>
      <hr></hr>
      <SocialMediaShare />
    </div>
  );
};

export default SearchPage;

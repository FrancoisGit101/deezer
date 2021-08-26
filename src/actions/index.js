import {
  SEARCH_ARTISTS,
  SEARCH_ARTISTS_RESULT,
  SELECT_ARTIST
} from "./ActionType";
import axios from "axios";

export const searchArtists = (criteria) => {
  return (dispatch) => {
    dispatch(
        {
          type: SEARCH_ARTISTS,
          criteria,
        });

    axios.get(
        'http://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='
        + criteria).then((response) => {

      dispatch(
          {
            type: SEARCH_ARTISTS_RESULT,
            data: response.data.data
          })
    })
  }
};

export const selectArtist = (artist) => {
  return async (dispatch) => {
    await dispatch({
      type: SELECT_ARTIST,
      artist,
    })
  }
};


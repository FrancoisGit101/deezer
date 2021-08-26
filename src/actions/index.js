import {
  GET_TRACK_LIST,
  SEARCH_ARTISTS,
  SEARCH_ARTISTS_RESULT,
  SELECT_ARTIST, TRACK_LIST_RESULT
} from "./ActionType";
import axios from "axios";

export const searchArtists = (criteria) => {
  return (dispatch) => {
    dispatch(
        {
          type: SEARCH_ARTISTS,
        });

    axios.get(
        'http://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='
        + criteria).then((response) => {

      dispatch(
          {
            type: SEARCH_ARTISTS_RESULT,
            data: response.data.data,
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

export const getArtistTrackList = (url) => {
  return (dispatch) => {
    dispatch(
        {
          type: GET_TRACK_LIST,
        });

    axios.get(
        'http://cors-anywhere.herokuapp.com/' + url).then((response) => {

      dispatch(
          {
            type: TRACK_LIST_RESULT,
            data: response.data.data,
          })
    })
  }
};

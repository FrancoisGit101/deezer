import * as actionType from '../actions/ActionType';

const deezerReducer = (state = {artists: []}, action) => {

  switch (action.type) {
    case actionType.SEARCH_ARTISTS : {
      return {
        ...state,
        searching: true,
        criteria: action.criteria,
      };
    }
    case actionType.SEARCH_ARTISTS_RESULT : {
      return {
        ...state,
        searching: false,
        data: action.data,
      };
    }
    case actionType.SELECT_ARTIST : {
      return {
        ...state,
        selected: action.artist !== undefined ? Object.assign({}, action.artist)
            : undefined,
      };
    }
    case actionType.GET_TRACK_LIST : {
      return {
        ...state,
        gettingTrackList: true,
      };
    }
    case actionType.TRACK_LIST_RESULT : {
      return {
        ...state,
        gettingTrackList: false,
        trackList: action.data,
      };
    }

    default :
      return state;
  }
};

export default deezerReducer;
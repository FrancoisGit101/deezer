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

    default :
      return state;
  }
};

export default deezerReducer;
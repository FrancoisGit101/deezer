import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import {useDispatch, useSelector} from "react-redux";
import {searchArtists, selectArtist} from "../actions";

const useStyles = makeStyles((theme) => ({}));

const Search = () => {
  const {searching} = useSelector(
      state => ({
        searching: state.deezerReducer.searching,
      }));

  const dispatch = useDispatch();
  const searchArtists_ = (criteria) => dispatch(searchArtists(criteria));
  const selectArtist_ = (artist) => dispatch(selectArtist(artist));

  const [criteria, setCriteria] = React.useState('');

  const onSearchClicked = React.useCallback(() => {
    searchArtists_(criteria);
  }, [criteria, searchArtists_]);

  const handleCriteriaChange = React.useCallback((event) => {
    setCriteria(event.target.value)
  });

  const handleOnKeyPress =  React.useCallback((event) => {
    if (event.key === "Enter") {
      selectArtist_(undefined).then(()=> {
        searchArtists_(criteria);
      });
    }
  });

  return (
      <React.Fragment>
        <Paper elevation={1}>
          <IconButton
              type="submit"
              aria-label="search"
              onClick={onSearchClicked}
              disabled={searching}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => handleCriteriaChange(event)}
              onKeyPress={event => handleOnKeyPress(event)}
              disabled={searching}
          />
        </Paper>
      </React.Fragment>)
};

export default Search
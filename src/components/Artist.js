import React from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {searchArtists, selectArtist} from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: 250,
    padding: 0
  },
  textContainer: {
    padding: 20
  }
}));

const Artist = ({data}) => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const selectArtist_ = (artist) => dispatch(selectArtist(artist));

  const onArtistClick = React.useCallback(() => {
    selectArtist_(data);
  }, [selectArtist_]);

  return (
      <React.Fragment>
        <Paper
            className={classes.root}
            onClick={onArtistClick}
            elevation={4}
        >
          <img src={data.picture_medium}/>
          <div className={classes.textContainer}>
            <Typography variant="h4">
              {data.name}
            </Typography>
            <Typography variant="body2">
              {data.nb_fan}k Fans
            </Typography>
          </div>
        </Paper>
      </React.Fragment>
  )
};

export default Artist;
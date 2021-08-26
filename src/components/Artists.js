import React from 'react';
import {useSelector} from "react-redux";
import Artist from './Artist'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArtistDetail from "./ArtistDetail";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 10,
    backgroundColor: ''
  }
}));

const Artists = () => {

  const classes = useStyles();

  const {searching, artists, artistSelected} = useSelector(
      state => ({
        searching: state.deezerReducer.searching,
        artists: state.deezerReducer.data,
        artistSelected: state.deezerReducer.selected,
      }));

  return (
      <div className={classes.root}>
        <Grid
            container
            justifyContent={"center"}
            direction={"column"}
        >
          <Grid item xs={12}>
            <Grid
                container
                justifyContent={"center"}
                spacing={2}
                direction={"row"}
            >
              {artistSelected === undefined ? artists?.map(artist => {
                return (
                    <Grid
                        item
                    >
                      <Artist
                          key={artist.id}
                          data={artist}/>
                    </Grid>)
              })
              : <ArtistDetail data={artistSelected} />}
            </Grid>
          </Grid>
        </Grid>
      </div>
  )
};

export default Artists;
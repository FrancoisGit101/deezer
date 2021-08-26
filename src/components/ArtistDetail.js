import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {getArtistTrackList} from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
  },
  textContainer: {
    padding: 20
  }
}));

const ArtistsDetail = () => {

  const classes = useStyles();

  const {gettingTrackList, artistSelected, trackList} = useSelector(
      state => ({
        gettingTrackList: state.deezerReducer.gettingTrackList,
        artistSelected: state.deezerReducer.selected,
        trackList: state.deezerReducer.trackList
      }));

  const dispatch = useDispatch();
  const getArtistTrackList_ = (args, login) => dispatch(
      getArtistTrackList(args, login));

  const fetchData = React.useCallback((artistSelected) => {
    Promise.all([
      getArtistTrackList_(artistSelected.tracklist),
    ]).catch(e => {
      console.error(e);
    });
  });

  React.useEffect(() => fetchData(artistSelected), []);

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
                direction={"row"}
            >
              <Grid item>
                <Paper elevation={4}>
                  <img src={artistSelected.picture_big}/>
                  <div className={classes.textContainer}>
                    <Typography variant="h4">
                      {artistSelected.name}
                    </Typography>
                    <Typography variant="body2">
                      {artistSelected.nb_fan}k Fans
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={4}>
                  <Typography variant={"h3"}>
                    Top Tracks
                  </Typography>
                  <div>
                    {trackList?.map((track, i) => (
                        <div>
                          {i+1} {track.title}
                        </div>
                    ))}
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>)
};

export default ArtistsDetail;
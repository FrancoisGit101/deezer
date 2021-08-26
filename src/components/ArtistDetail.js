import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme, data) => ({
  root: {
    paddingTop: 10,
  },
  backgroundImage: {
    backgroundImage: `url(${data.picture_big})`
  }
}));

const ArtistsDetail = ({data}) => {

  const classes = useStyles(data);

  return (
      <div className={classes.root}>
        <Grid
            container
            justifyContent={"center"}
            direction={"column"}
        >
          <Grid item xs={12}>
              <Paper elevation={4}>
                <div className={classes.backgroundImage}></div>
                <Typography variant={"h4"}>
                  {data.name}
                </Typography>
              </Paper>
            </Grid>
        </Grid>
      </div>)
};

export default ArtistsDetail;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    marginTop: "20px",
    marginBottom: "20px",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "200px",
    // paddingTop: "56.25%", // 16:9
    width: "200px",
    float: "left",
  },
});

const SongCard = ({ song }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia image={song.albumArt} className={classes.media} />
        <Typography variant="h5" component="h2">
          {song.title}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {song.album}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default SongCard;

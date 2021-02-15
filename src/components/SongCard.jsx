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

const albumArt = {
  Guppy:
    "https://media.npr.org/assets/img/2017/04/11/charly-bliss-cover_sq-e42da301cadf62b69679b48e05843fed80388f34.jpg",
  "Young Enough":
    "https://images-na.ssl-images-amazon.com/images/I/71yT7ZUA3AL._SL1400_.jpg",
  "Supermoon EP": "https://f4.bcbits.com/img/a4265614415_10.jpg",
};

const SongCard = ({ song }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia image={albumArt[song.album]} className={classes.media} />
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

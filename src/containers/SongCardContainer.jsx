import React from 'react';
import SongCard from '../components/SongCard'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        height: "100%",
        borderStyle: 'none'
    }
})

const SongCardContainer = ({songs}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {songs?.map(song => (
                <SongCard song={song}/>
            ))}
        </div>
    );
}

export default SongCardContainer;

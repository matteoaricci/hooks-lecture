import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormGroup,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    position: "absolute",
    right: "10px",
    top: "10%",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "7px 5px 10px #00000060",
  },
  select: {
    width: "100%",
  },
});

const NewSongForm = ({submitSong}) => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const onSubmit = (data) => submitSong(data);
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormControl>
          <InputLabel id="album-name">Album Name</InputLabel>
          <Controller
            as={
              <Select
                className={classes.select}
                labelId="album-name"
                name="album"
                inputRef={register}
              >
                <MenuItem value="Guppy">Guppy</MenuItem>
                <MenuItem value="Young Enough">Young Enough</MenuItem>
                <MenuItem value="Supermoon EP">Supermoon EP</MenuItem>
              </Select>
            }
            control={control}
            name="album"
            inputRef={register}
          />
        </FormControl>
        <br></br>
        <FormControl>
          <Input
            placeholder="Song Title"
            name="song"
            inputRef={register({ required: "Song Title Required" })}
          />
          {errors.song && <p>{errors.song.message}</p>}
        </FormControl>
        <br></br>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </form>
  );
};

export default NewSongForm;

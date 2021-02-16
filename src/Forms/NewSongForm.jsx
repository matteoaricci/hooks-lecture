import React from "react";
import { useForm, Controller } from "react-hook-form";

const NewSongForm = ({ submitSong }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (song) => submitSong(song);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register({ required: "Song title required" })} name="title" />
      {errors.title && <p>{errors.title.message}</p>}
      <br></br>
      <select name="album" ref={register}>
        <option value="Guppy">Guppy</option>
        <option value="Young Enough">Young Enough</option>
        <option value="Supermoon EP">Supermoon EP</option>
      </select>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewSongForm;

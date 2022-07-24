import React from "react";
import { directors } from "../data";

function Directors() {
  const directorinfo = directors.map((director) => (
    <div key={director.name}>
    <h2>{director.name}</h2>
    <ul>
      {director.movies.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  </div>
  )
)
return (
  <div>
    <h1>Directors Page</h1>
    {directorinfo}
  </div>
);
}

export default Directors;

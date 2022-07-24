import React from "react";
import { actors } from "../data";

function Actors() {
  const actorinfo = actors.map((actor) => (
    <div key={actor.name}>
    <h2>{actor.name}</h2>
    <ul>
      {actor.movies.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  </div>
  )
)
return (
  <div>
    <h1>Actors Page</h1>
    {actorinfo}
  </div>
)
}


  

export default Actors
  


import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getPokemon } from "../api/pokemon";
function Pokemon() {
  const [pokemondata, Setdata] = useState([]);
  const { pokemon } = useParams();
  const getdata = async () => {
    const data = await getPokemon(pokemon);

    Setdata(data);
  };
  useEffect(() => {
    getdata();
  });
  return (
    <>
      <h1>{pokemondata.name}</h1>

      <div id="poke-container">
        <div id="image">
          <img
            src={pokemondata?.sprites?.other?.dream_world?.front_default}
            alt="img"
          />
        </div>
        <div id="profile">
          <p>Id:{pokemondata.id}</p>
          {pokemondata?.stats?.map((e) => (
            <p>
              {e.stat.name}:{e.base_stat}
            </p>
          ))}
          Types:
          <ol>
            {pokemondata?.types?.map((e) => (
              <li>{e.type.name}</li>
            ))}
          </ol>
          <ol></ol>
        </div>
      </div>
    </>
  );
}

export default Pokemon;

import React from "react";
import { getPokemon } from "../api/pokemon";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Search() {
  const [pokemon, Setpokemon] = useState({});
  const [data, Setdata] = useState("");

  const getData = async (pokemon) => {
    if (!pokemon) return;
    const Data = await getPokemon(pokemon);
    Setdata(Data);
  };
  const handleSearch = () => {
    getData(pokemon);
  };

  const handleInput = (e) => {
    Setpokemon(e.target.value);
  };

  useEffect(() => {
    getData("pikachu");
  }, []);

  return (
    <div id="search-container">
      <input
        id="input"
        type="text"
        onChange={handleInput}
        placeholder="enter pokemon name"
      />
      <br />
      <button id="search-btn" onClick={handleSearch}>
        Search
      </button>
      <br />
      <br />

      <img
        src={data?.sprites?.other?.dream_world?.front_default}
        alt="img"
        id="poke-img"
      />
      <table>
        <tr>
          <td>ID</td>
          <td>{data?.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{data?.name}</td>
        </tr>
        <tr>
          <td>Base-experience</td>
          <td>{data?.base_experience}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{data?.weight / 10}kg</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{data?.height / 10}m</td>
        </tr>
        {data?.stats?.map((e) => (
          <tr key={e.stat.name}>
            <td>{e.stat.name}</td>
            <td> {e.base_stat}</td>
          </tr>
        ))}

        <tr>
          <td>Shiny-form</td>
          <td>
            <img src={data?.sprites?.front_shiny} alt="img" />
          </td>
        </tr>
        <tr>
          <td>More Details</td>
          <td>
            <Link to={`http://localhost:3000/pokemons/${data.name}`}>
              Read More
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Search;

import axios from "axios";
import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [pokemon, Setpokemon] = useState({});
  const [data, Setdata] = useState("");

  const getData = (pokemon) => {
    if (!pokemon) return;
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios
      .get(URL)
      .then((res) => {
        Setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
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
    <div>
      <center>
        <input
          id="input"
          type="text"
          onChange={handleInput}
          placeholder="enter pokemon name"
        ></input>
        <br />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>
        <br />
        <br />

        <img src={data?.sprites?.other?.dream_world?.front_default} alt="img" />
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
        </table>
      </center>
    </div>
  );
}

export default App;

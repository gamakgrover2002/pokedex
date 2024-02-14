import React from "react";
import { useEffect } from "react";
import { getList } from "../api/pokemon";
import { useState } from "react";
import { Link } from "react-router-dom";

function PokemonList() {
  const [List, SetList] = useState([]);
  const getData = async () => {
    const data = await getList();
    console.log(data.results);
    SetList(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>PokemonList</h1>
      <div id="poke-list">
        {List.map((e) => (
          <Link to={`pokemons/${e.name}`}>
            <div id="list">{e.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default PokemonList;

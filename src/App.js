import React from "react";
import PokemonList from "./pages/PokemonList";
import Search from "./pages/Search";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Pokemon from "./pages/Pokemon";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element=<Layout />>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/" element={<PokemonList />}></Route>
            <Route path="/pokemons/:pokemon" element={<Pokemon />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

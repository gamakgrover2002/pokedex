const BASE_URL = "https://pokeapi.co/api/v2/";
export const getPokemon = async (pokemon) => {
  const URL = `${BASE_URL}pokemon/${pokemon}`;
  const res = await fetch(URL);
  const dat = await res.json();
  return dat;
};
export const getList = async () => {
  const URL = `${BASE_URL}pokemon?limit=1200&offset=0`;
  const res = await fetch(URL);
  const dat = await res.json();
  return dat;
};

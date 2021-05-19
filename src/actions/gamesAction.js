import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api.js";
//Action Creator
//Redux actions cannot be asynchronous thus, thunk is used
export const loadGames = () => async (dispatch) => {
  //Fetching data using axios
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newell: newData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

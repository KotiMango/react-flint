import axios from "axios";
import { gameDetailsURL, gameScreenShotURL } from "../api";
//async action loading_detail occurs before the fetching
export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotsData = await axios.get(gameScreenShotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotsData.data,
    },
  });
};

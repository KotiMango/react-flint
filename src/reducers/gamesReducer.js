const initState = {
  popular: [],
  newGames: [],
  upComing: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newell,
        upComing: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;

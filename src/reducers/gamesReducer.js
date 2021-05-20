const initState = {
  popular: [],
  newGames: [],
  upComing: [],
};
//This reducer sets the payload from the action in its correct place
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

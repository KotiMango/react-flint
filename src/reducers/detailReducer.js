const initState = { game: {}, screen: {}, isLoading: true };
//Loading detail gets called first and sets isloading to true(default)
//fetches data via get_detail and sets isloading to false
const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;

//Base URL
const base_url = "https://api.rawg.io/api/";

//API key
const key = "key=13ee38a56d6c4832b02971b72204c1e6";

//Getting Current Time
const getCurrentMonth = (i = 1) => {
  const month = new Date().getMonth() + i;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const pervMonth_2 = getCurrentMonth(-1);
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const notaWhileAgo = `${currentYear}-${pervMonth_2}-${currentDay}`;
const lastDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Getting Search Queries for fetching games
//Popular Games
const popular_games = `games?${key}&dates=${lastDate},${currentDate}&ordering=-rating&page_size=10`;
//New games
const new_games = `games?${key}&dates=${notaWhileAgo},${currentDate}&ordering=-rating&page_size=10`;
//Upcoming
const upcoming = `games?${key}&dates=${currentDate},${nextDate}&ordering=-added&page_size=10`;
//finshed dately updated urls of the fetch link from the api
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?${key}`;
//GAME SCREENSHOTS
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${key}`;

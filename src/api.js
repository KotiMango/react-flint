//Base URL
const base_url = "https://api.rawg.io/api/";

//API key
const key = "key=13ee38a56d6c4832b02971b72204c1e6";

//Getting Current Time
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?${key}&dates=${lastDate},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());

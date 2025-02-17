import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: "3cea15e9-a800-4215-a5d4-f320e1b7102f" });

// Using async/await
async function getTeams() {
  try {
    const teams = await api.nba.getTeams();
    console.log(teams.data);
  } catch (error) {
    console.error(error);
  }
}

const teams = getTeams();



// Using promises
const players = api.nba
  .getPlayers({ search: "James" })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));


  export {teams, players}
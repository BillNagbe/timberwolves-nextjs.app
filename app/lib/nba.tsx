import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: "3cea15e9-a800-4215-a5d4-f320e1b7102f" });

const teams = api.nba
    .getTeams()
    .then((response) => console.log(response.data))
    .catch((e) => console.log(e));

  
  // Using promises
  const players = api.nba
    .getPlayers()
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));

  

export {teams, players}

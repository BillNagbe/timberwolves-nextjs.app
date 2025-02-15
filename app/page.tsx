import { DisplayPlayers } from "./lib/utilities"
import { teams, players } from "./lib/nba"

 function Page() {

  const player10 = teams;

    console.log(teams, players);

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full text-white">
        <DisplayPlayers
          teams={teams}
          players={players}
        />
    </div>
  )
}


export default Page;
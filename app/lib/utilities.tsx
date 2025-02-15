
function DisplayPlayers(props) {
    return (
        <div className="">
            <div className="">
               <h2>{props.players}</h2>
               <h2>{props.teams}</h2>
            </div>
        </div>
    )
};


export {DisplayPlayers};
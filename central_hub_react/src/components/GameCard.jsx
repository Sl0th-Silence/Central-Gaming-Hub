export default function GameCard() {

    const sampleStuff = [
        {
            title: "Nier Automata",
            releaseDate: "March 17, 2017",
            developers: [
                "Square Enix",
                "PlatinumGames Inc."
            ],
            imgURL : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg?t=1760991364",
            achievementCount: 47
        },
        {
            title: "Sekiro: Shadows Die Twice",
            releaseDate: "March 21, 2019",
            developers: [
                "FromSoftware Inc."
            ],
            imgURL : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1754933982",
            achievementCount: 34
        }
    ]

    return <div className="gameContainer">
        {sampleStuff.map((game) => {
           return <div className="gameCard">
                <h1>{game.title}</h1>
                <h3>Release Date (steam): {game.releaseDate}</h3>
                <table id="gameTable">            
                    <td>
                        <img src={game.imgURL} alt="" height="115px" />
                    </td>
                    <td>
                        <p>Developers: </p>
                        <ul>
                            {game.developers.map((dev) => {
                                return <li><p id="devNames">{dev}</p></li>
                            })}
                        </ul>
                        <p>Achievement Count: {game.achievementCount}</p>
                    </td>
                </table>
           </div> 
        })}     
    </div>
}
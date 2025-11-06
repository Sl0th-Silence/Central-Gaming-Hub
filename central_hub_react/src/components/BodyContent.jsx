import GameCard from "./GameCard"

export default function BodyContent(props) {
    const gameArr = props.games;

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

    return <>
    <h4>GAME LIST (C:/Program Files (x86)/Steam/steamapps/common):</h4>
        {gameArr.map((game) => {
            return <>
            <p>{game}<br /></p> 
            </>
        })}<div className="gameBox">
        {sampleStuff.map((game) => {
            //console.log(game);
            return <GameCard key={game.title} data={game} />
        })}
        </div>
    </>
    
}
import GameCard from "./GameCard"


export default function BodyContent(props) {
    const gameArr = props.games;

    const sampleStuff = [
        {
            id: 1,
            fileName: "NieRAutomata",
            title: "Nier:Automata",
            releaseDate: "March 17, 2017",
            developers: [
                "Square Enix",
                "PlatinumGames Inc."
            ],
            imgURL : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg?t=1760991364",
            achievementCount: 47
        },
        {
             id: 2,
            fileName: "Sekiro",
            title: "Sekiro: Shadows Die Twice",
            releaseDate: "March 21, 2019",
            developers: [
                "FromSoftware Inc."
            ],
            imgURL : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1754933982",
            achievementCount: 34
        },
        {
             id: 3,
            fileName: "Balatro",
            title: "Balatro",
            releaseDate: "Febuary 24, 2024",
            developers: [
                "LocalThunk"
            ],
            imgURL: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/7a85430784e4d613cdb0547414d8cf16ffa45747/header.jpg?t=1762275532",
            achievementCount: 31
        }
    ]

    return <>
        {gameArr[1] != undefined ? (
            <h4>GAME LIST (C:/Program Files (x86)/Steam/steamapps/common):</h4>
        ) : (<p></p>)}
        
        {gameArr.map((game) => {
            return <>
            <p>{game}
            {sampleStuff.map((mapGame) => {
                    if(game == mapGame.fileName) {
                        return " - True";
                    }
                })}  
                <br /> 
            </p>
            </>
        })}
        <div className="gameBox">
        {sampleStuff.map((game) => {
            //console.log(game);
            return <GameCard key={game.id} data={game} />
        })}
        </div>
    </>
    
}
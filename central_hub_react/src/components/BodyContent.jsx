import GameCard from "./GameCard"

export default function BodyContent(props) {
    /*
        gets all of the games found from the file scan, sets gameArr to it

            gameArr: 
                array of individual games, the properties of each game 
                is explained in GameCard.jsx's comment 
    
    */ 
    const gameArr = props.games;

    //sample data for testing purposes
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

    /* 
        returns a container that houses 2 things:
            game list, which is basically there just for testing / development purposes
            each games CameCard, which is the unique boxes shown for the game output
    */
        return <>
        {/* 
            this checks if the 1st element is undefined, if it is, it won't show the 'game list' part
            the first element will only be undefined if the file system cannot find anything in the default
            steam directory, which means either:
                - the directory is on a different drive / folder 
                - no games are installed
                - the user is accessing this from a browser and not electron
        */}
        {gameArr[0] != undefined ? (
            <h4>GAME LIST (C:/Program Files (x86)/Steam/steamapps/common):</h4>
        ) : (<p></p>)}
        
        {/*
            this section is exluded from the above check, as if the elements 
            are undefined (aka nothing in the array) the map will not even run, 
            at least I think it doesn't... even if it does it only puts out a 
            blank <p> statement which is negligable in terms of styling
        */}
        {gameArr.map((game) => {
            return <>
            <p>{game}
            {sampleStuff.map((mapGame) => {
                    /*
                        this is here mostly for testing purposes
                        if the game in the array matches the file name
                        specified in the sample data, it just says its there
                    */
                    if(game == mapGame.fileName) {
                        return " - True";
                    }
                })}  
                <br /> 
            </p>
            </>
        })}
        <div className="gameBox">
        {
        /*
            iterates through the sample data, and passes the game's information
            through to the GameCard.jsx main function (aka what makes the card)
            
            the individual game data is processed there and ouputed properly
        */
        sampleStuff.map((game) => {
            //console.log(game);
            return <GameCard key={game.id} data={game} />
        })}
        </div>
    </>
    
}
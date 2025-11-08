import fs from "fs";

export default function GameCard(props) {
    /*
        this will be a singluar game that is passed through props,
        said game has:
            - file name (the folder's name)
            - title
            - release date
            - an image for the game (cover art or whatnot)
            - developers (list that scales with however many there is)
            - amount of achievements the game has
    */
    const game = props.data;
    const imgURL = "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/"+ game.id + "/header.jpg";

    //console.log(props)
    //console.log("inside of gamecard")

    return <div className="gameContainer">
        <div className="gameCard">
            {/* 
                there is 2 tables so I can force the title and release on 2 different lines 
                as short names for games would otherwise put them on the same line

                they also have 2 seperate IDs, as the css is different for the "box" where 
                the image / other data will be positioned
            */}
            <table id="gameHeader">
                <tbody>
                    <tr>
                        <td><h1>{game.title}</h1></td>
                    </tr>
                    <tr>
                        <td><h3>Release Date (steam): {game.releaseDate}</h3></td>
                    </tr>
                </tbody>
            </table>
            
            
            <table id="gameTable">
                <tbody>
                    <tr>           
                        <td>
                            <img src={imgURL} alt=""/>
                        </td>
                        <td>
                            <p>Developers: </p>
                            <ul>
                                {
                                game.developers.map((dev, index) => {
                                    return <li><p id="devNames" key={index}>{dev}</p></li>
                                })}
                            </ul>
                            <p>Achievement Count: {game.achievementCount}</p>
                        </td>
                    </tr> 
                </tbody>
            </table>
        </div> 

    </div>
}
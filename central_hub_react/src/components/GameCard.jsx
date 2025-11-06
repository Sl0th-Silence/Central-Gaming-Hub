export default function GameCard(props) {

    const game = props.data;
    //console.log(props)
    //console.log("inside of gamecard")

    return <div className="gameContainer">
        <div className="gameCard">
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
                            <img src={game.imgURL} alt=""/>
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
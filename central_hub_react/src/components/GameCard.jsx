export default function GameCard(props) {

    const game = props.data;
    //console.log("inside of gamecard")

    return <div className="gameContainer">
        <div className="gameCard">
            <h1>{game.title}</h1>
            <h3>Release Date (steam): {game.releaseDate}</h3>
            <table id="gameTable">
                <tbody>
                    <tr>           
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
                    </tr> 
                </tbody>
            </table>
        </div> 

    </div>
}
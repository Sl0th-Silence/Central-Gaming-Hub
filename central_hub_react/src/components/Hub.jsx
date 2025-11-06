import NavBar from "./NavBar";
import Footer from "./Footer";
import BodyContent from "./BodyContent";

//main container for all the data, pages, etc. that are used
export default function Hub(props) {
    const gameArr = props.games;

    return <div>
        <NavBar />
        <BodyContent games={gameArr}/>
        <Footer />
    </div>
}
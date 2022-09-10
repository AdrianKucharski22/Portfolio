import {Link} from "react-router-dom";
import HomeHeroImage from "../assets/Home-Hero-Image.jpg"
import Decoration from "../assets/Decoration.svg"
import Icon1 from "../assets/Icon-1.svg"
import Icon2 from "../assets/Icon-2.svg"
import Icon3 from "../assets/Icon-3.svg"
import Icon4 from "../assets/Icon-4.svg"
import People from "../assets/People.jpg"
import Signature from "../assets/Signature.svg"
import Nav from "./Nav";
import WhoWeHelp from "./WhoWeHelp";
import Footer from "./Footer";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import Steps from "./Steps";
import AboutUs from "./AboutUs";

export function Home() {
    return(
        <div className={'Home'}>
            <Header/>
            <ThreeColumns/>
            <Steps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Footer/>
        </div>
    )
}
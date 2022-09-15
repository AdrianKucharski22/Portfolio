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
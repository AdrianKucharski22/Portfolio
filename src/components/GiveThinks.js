import FormHeroImage from "../assets/Form-Hero-Image.jpg";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import Footer from "./Footer";
import GiveThinksForm from "./GiveThinksForm";

function GiveThinks(){

    return(
        <div className="Home">
        <header>
            <div className={'imageForm'}>
                <img src={FormHeroImage} alt={''}/>
            </div>
            <div className={'headerInfo'}>
                <Nav/>
                <div>
                    <h1>Oddaj rzeczy,których już nie chcesz</h1>
                    <h1>POTRZEBUJĄCYM</h1>
                </div>
                <div>
                    <img src={Decoration} alt={'decoration'}/>
                    <h1 className={'stepText'}>Wystarczą 4 proste ktoki:</h1>
                </div>
                <div>

                    <div className={'stepsInfo'}>
                        <div className={'stepsSquare'}>
                            <h1>1</h1>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className={'stepsSquare'}>
                            <h1>2</h1>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className={'stepsSquare'}>
                            <h1>3</h1>
                            <p>Wybierz fundacje</p>
                        </div>
                        <div className={'stepsSquare'}>
                            <h1>4</h1>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <GiveThinksForm/>
            <Footer/>
        </div>
    )
}
export default GiveThinks
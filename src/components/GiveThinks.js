import FormHeroImage from "../assets/Form-Hero-Image.jpg";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import Footer from "./Footer";
import FormSteps1 from "./FormSteps1";
import FormSteps2 from "./FormSteps2";
import FormSteps3 from "./FormSteps3";
import FormSteps4 from "./FormSteps4";

function GiveThinks(){
    return(
        <div className="Home">
        <header>
            <div className={'image'}>
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
                </div>
                <div>
                    <h1>Wystarczą 4 proste ktoki:</h1>
                    <div>
                        <div>
                            <h1>1</h1>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div>
                            <h1>2</h1>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div>
                            <h1>3</h1>
                            <p>Wybierz fundacje</p>
                        </div>
                        <div>
                            <h1>4</h1>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

            <FormSteps1/>
            <FormSteps2/>
            <FormSteps3/>
            <FormSteps4/>
            <Footer/>
        </div>
    )
}
export default GiveThinks
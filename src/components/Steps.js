import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./fire";

function Steps() {
    function Buttons(){
        const [user, setUser] = useState({})
        onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        if (user?.email){
            return(
                <Link to={'/GiveThinks'} alt={'GiveThinks'}><button>ODDAJ RZECZY</button></Link>
            )}
        else{
            return(
                <Link to={'/Login'} alt={'Login'}><button>ODDAJ RZECZY</button></Link>
            )
        }
    }
    return (
        <article>
            <div className={'stepsName'}>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={Decoration} alt={'decoration'}/>
            </div>
            <div className={"steps"}>
                <div className="chose">
                    <img src={Icon1} alt={''}/>
                    <h2>Wybierz rzeczy</h2>
                    <hr/>
                    <p>Ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="chose">
                    <img src={Icon2} alt={''}/>
                    <h2>Spakuj je</h2>
                    <hr/>
                    <p>Skorzystaj z worków na śmieci</p>
                </div>
                <div className="chose">
                    <img src={Icon3} alt={''}/>
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <hr/>
                    <p>Wybierz zaufane miejsce</p>
                </div>
                <div className="chose">
                    <img src={Icon4} alt={''}/>
                    <h2>Zamów kuriera</h2>
                    <hr/>
                    <p>Kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Buttons/>
        </article>
    );
}

export default Steps;
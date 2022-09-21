import HomeHeroImage from "../assets/Home-Hero-Image.jpg";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "./fire";
function Buttons(){
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })
    if (user?.email){
        return(
            <div>
                <Link to={'/GiveThinks'} alt={'GiveThinks'}><button>Oddaj rzeczy</button></Link>
                <Link to={'/GiveThinks'} alt={'GiveThinks'}><button>Zorganizuj zbiórkę</button></Link>
            </div>
        )}
    else{
        return(
            <div>
                <Link to={'/Login'} alt={'Login'}><button>Oddaj rzeczy</button></Link>
                <Link to={'/Login'} alt={'Login'}><button>Zorganizuj zbiórkę</button></Link>
            </div>
        )
    }
}
function Header(){
    return(
        <header>
           <div className={'image'}>
               <img src={HomeHeroImage} alt={''}/>
           </div>
           <div className={'headerInfo'}>
               <Nav/>
               <div>
                   <h1>Zacznij pomagać!</h1>
                   <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
               </div>
               <div>
                   <img src={Decoration} alt={'decoration'}/>
               </div>
               <Buttons/>
           </div>
        </header>
    )}
export default Header;
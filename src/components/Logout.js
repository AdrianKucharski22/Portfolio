import {Link} from "react-router-dom";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import '../scss/main.scss'
function Logout(){
    return(
        <div className={'Login'}>
            <Nav/>
            <article>
                <h1>Wylogowanie nastąpiło<br/> pomyślnie!</h1>
                <img src={Decoration} alt={''}/>
                <div className={'buttons'}>
                    <button className={'btnLogout'}><Link to={'/'} alt={'Main'}>Strona główna</Link></button>
                </div>
            </article>

        </div>
    );
}
export default Logout
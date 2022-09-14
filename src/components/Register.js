import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import '../scss/main.scss'
import {Link} from "react-router-dom";
function Register(){
    return(
        <div className={'Login'}>
            <Nav/>
            <article>
                <h1>Zaloguj się</h1>
                <img src={Decoration}/>
                <form>
                    <p>Email</p>
                    <input type={"email"}/>
                    <p>Hasło</p>
                    <input type={"password"}/>
                    <p>Powtórz Hasło</p>
                    <input type={"password"}/>
                </form>
                <div className={'buttons'}>
                    <button><Link to={'/Login'} alt={'Login'}>Zaloguj się</Link></button>
                    <button>Załóż konto</button>
                </div>
            </article>

        </div>
    );
}
export default Register
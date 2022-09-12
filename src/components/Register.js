import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import '../scss/main.scss'
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
                    <button>Załóż konto</button>
                    <button>Zaloguj się</button>
                </div>
            </article>

        </div>
    );
}
export default Register
import {Link} from "react-router-dom";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import '../scss/main.scss'
function Login(){
    function check(){
        const email = document.querySelector('.email')
        const emailError = document.querySelector('.emailError')
        const password = document.querySelector('.password')
        const passwordError = document.querySelector('.passwordError')
        if (email.value.includes('@') === false || email.value.includes(' ') === true){
            emailError.textContent="błędny email"
        }
        else {
            emailError.textContent=""
        }
        if (password.value.length < 6){
            passwordError.textContent = "Hasło musi mieć conajmniej 6 znakow"
        }
        else {
            passwordError.textContent = ""
        }
    }
    return(
        <div className={'Login'}>
            <Nav/>
            <article>
                <h1>Zaloguj się</h1>
                <img src={Decoration} alt={''}/>
                <form>
                    <p>Email</p>
                    <input type={"email"} className={'email'}/>
                    <p className={'emailError error'}></p>
                    <p>Hasło</p>
                    <input type={"password"} className={'password'}/>
                    <p className={'passwordError error'}></p>
                </form>
                <div className={'buttons'}>
                    <button><Link to={'/Register'} alt={'Register'}>Załóż konto</Link></button>
                    <button onClick={check}>Zaloguj się</button>
                </div>
            </article>

        </div>
    );
}
export default Login
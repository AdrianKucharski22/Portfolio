import {Header} from "./header";
import Decoration from "../assets/Decoration.svg"

function Login(){
    return(
        <div className={'Login'}>
            <Header/>
            <main>
                <h1>Zaloguj się</h1>
                <img src={Decoration}/>
                <form>
                    <p>Email</p>
                    <input type={"email"}/>
                    <p>Hasło</p>
                    <input type={"password"}/>
                </form>
            </main>
        </div>
    );
}
export default Login
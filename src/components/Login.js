import {Link} from "react-router-dom";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import '../scss/main.scss'
import React, {useState} from "react";
import {auth} from "./fire";
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
function Login(){
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })
    const login = async () =>{
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user)
        }
        catch (error){
            console.log(error.message)
        }

    }
    function check(){
        const email = document.querySelector('.email')
        const emailError = document.querySelector('.emailError')
        const password = document.querySelector('.password')
        const passwordError = document.querySelector('.passwordError')
        if (email.value.includes('@') === false || email.value.includes(' ') === true){
            emailError.textContent="Błędny email"
        }
        else {
            emailError.textContent=""
        }
        if (password.value.length < 6){
            passwordError.textContent = "Hasło musi mieć conajmniej 6 znakow"
        }
        else {
            passwordError.textContent = ""
            return login()
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
                    <input type={"email"} className={'email'} id='email' name='email' onChange={event => {setLoginEmail(event.target.value)}}/>
                    <p className={'emailError error'}></p>
                    <p>Hasło</p>
                    <input type={"password"} className={'password'} id='password' name='password' onChange={event => {setLoginPassword(event.target.value)}}/>
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
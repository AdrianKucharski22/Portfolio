import React, {useState} from "react";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import '../scss/main.scss'
import {Link} from "react-router-dom";
import {auth} from "./fire";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
function Register(){
    function check() {
        const email = document.querySelector('.email')
        const emailError = document.querySelector('.emailError')
        const password = document.querySelector('.password')
        const passwordError = document.querySelector('.passwordError')
        const password2 = document.querySelector('.password2')
        const password2Error = document.querySelector('.password2Error')
        if (email.value.includes('@') === false || email.value.includes(' ') === true) {
            emailError.textContent = "błędny email"
        } else {
            emailError.textContent = ""
        }
        if (password.value.length < 6) {
            passwordError.textContent = "Hasło musi mieć conajmniej 6 znakow"
        } else {
            passwordError.textContent = ""
        }
        if (password2.value === password.value){
            password2Error.textContent=""
            return register()
        }
        else {
            password2Error.textContent = " hasła nie są identyczne"
        }
        return null;
    }

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const register = async () =>{
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        }catch (error){
            console.log(error.message);
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
                    <input type={"email"} className={'email'} onChange={event => {setRegisterEmail(event.target.value)}}/>
                    <p className={'emailError error'}></p>
                    <p>Hasło</p>
                    <input type={"password"} className={'password'}/>
                    <p className={'passwordError error'}></p>
                    <p>Powtórz Hasło</p>
                    <input type={"password"} className={'password2'} onChange={event => {setRegisterPassword(event.target.value)}}/>
                    <p className={'password2Error error'}></p>
                </form>
                <div className={'buttons'}>
                    <button><Link to={'/Login'} alt={'Login'}>Zaloguj się</Link></button>
                    <button onClick={check}>Załóż konto</button>
                </div>
            </article>

        </div>
    );
}
export default Register
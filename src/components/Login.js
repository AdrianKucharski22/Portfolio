import {Link} from "react-router-dom";
import Nav from "./Nav";
import Decoration from "../assets/Decoration.svg";
import '../scss/main.scss'
import React from "react";
function Login(){
    const [error,setError] = React.useState(null);
    const [form, setForm] = React.useState({
        email:'',
        password:''
    })
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const errorMsg = validate(form)
        if (errorMsg){
            setError(errorMsg)
            console.log('błąd')
            return
        }
        console.log('formSubmited',form)
    }
    const updateField = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const validate = form =>{
        if (!form.email){
            return 'Email jest wymagany'
        }
        else if (! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(form.email)){
            return 'Zły e-mail'
        }

        if (!form.password){
            return "Hasło jest wymagane"
        }
        else if (form.password.length < 6){
            return "hasło musi być dłuższe niż 6 liter"
        }

        return null
    }
    // function check(){
    //     const email = document.querySelector('.email')
    //     const emailError = document.querySelector('.emailError')
    //     const password = document.querySelector('.password')
    //     const passwordError = document.querySelector('.passwordError')
    //     if (email.value.includes('@') === false || email.value.includes(' ') === true){
    //         emailError.textContent="błędny email"
    //     }
    //     else {
    //         emailError.textContent=""
    //     }
    //     if (password.value.length < 6){
    //         passwordError.textContent = "Hasło musi mieć conajmniej 6 znakow"
    //     }
    //     else {
    //         passwordError.textContent = ""
    //     }
    // }
    return(
        <div className={'Login'}>
            <Nav/>
            <article>
                <h1>Zaloguj się</h1>
                <img src={Decoration} alt={''}/>
                <form>
                    <p className={'error'}>{error}</p>
                    <p>Email</p>
                    <input type={"email"} className={'email'} id='email' name='email' onChange={updateField}/>
                    <p className={'emailError error'}></p>
                    <p>Hasło</p>
                    <input type={"password"} className={'password'} id='password' name='password' onChange={updateField}/>
                    <p className={'passwordError error'}></p>
                </form>
                <div className={'buttons'}>
                    <button><Link to={'/Register'} alt={'Register'}>Załóż konto</Link></button>
                    <button onClick={handleSubmit}>Zaloguj się</button>
                </div>
            </article>

        </div>
    );
}
export default Login
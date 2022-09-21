import React from "react";
import axios from "axios";
function Form(){
        const [error,setError] = React.useState(null);
        const [errorName , setErrorName] = React.useState(null)
        const [errorEmail , setErrorEmail] = React.useState(null)
        const [errorMessage , setErrorMessage] = React.useState(null)
        const [form, setForm] = React.useState({
            name:'',
            email:'',
            message:''
        })
        const handleSubmit = async (e) =>{
            e.preventDefault()
            const errorMsg = validate(form)
            if (errorEmail || errorMessage || errorName){
                setError(errorMsg)
                console.log('błąd')
                return
            }
            console.log('formSubmited',form)
            try {
                const {data} = await axios.post(`https://fer-api.coderslab.pl/v1/portfolio/contact`, form)
                setForm(data)
                setError("Wysłano poprawnie")
            }catch {
                setError('')
            }
        }
        const updateField = e =>{
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }

        const validate = form =>{

            if (!form.email){
            setErrorEmail('Email jest wymagany')
                setError('')
            }

            else if (! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(form.email)){
                setErrorEmail( 'Zły e-mail')
            }
            else {
                setErrorEmail("")
            }

            if (!form.name){
                setErrorName( "Imię jest wymagane")
            }
            else if(form.name.length < 3 ){
                setErrorName("imię jest za krótkie bądź posiada spacje")
            }
            else {
                setErrorName("")
            }
            if (!form.message){
                setErrorMessage("wiadomość jest wymagana")
            }
            else if (form.message.length < 120){
                setErrorMessage("wiadomość jest za krótka")
            }
            else{
                setErrorMessage("")
            }

            return error
        }
    return(
        <form className={'myForm'}>
            <p style={{color: "green"}}>{error}</p>
            <div className={"yourData"}>
                <div className="name">
                    <p>Wpisz swoje imię</p>
                    <input type={'text'} className={'userName'} placeholder={'Imię'} name={'name'} id={'name'} onChange={updateField}/>
                    <div className={'nameError error'} >{errorName}</div>
                </div>
                <div className="email">
                    <p>Wpisz swoje email</p>
                    <input type={'email'} className={'userEmail'} placeholder={'abc@xyz.pl'} name={'email'} id={'email'} onChange={updateField}/>
                    <div className={'emailError error'}>{errorEmail}</div>
                </div>
            </div>
            <div className="message">
                <p>Wpisz swoją wiadomość</p>
                <textarea placeholder={'Treść wiadomości'} className={'userMessage'} name={'message'} id={'message'} onChange={updateField}/>
                <div className={'messageError error'}>{errorMessage}</div>
            </div>
            <button  onClick={handleSubmit}>Wyślij</button>
        </form>
        )
}
export default Form
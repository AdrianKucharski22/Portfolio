import React from "react";
function Form(){
        const [error,setError] = React.useState(null);
        const [form, setForm] = React.useState({
            name:'',
            email:'',
            message:''
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

            if (!form.name){
                return "Imię jest wymagane"
            }
            else if(form.name.length < 2 || form.name.value.includes(" ") === true){
                return "imię jest za krótkie bądź posiada spacje"
            }

            if (!form.message){
                return "wiadomość jest wymagana"
            }
            else if (form.message.length < 120){
                return "wiadomość jest za krótka"
            }
            else{
                return ""
            }

            return null
        }

    // function check(){
    //     const userName = document.querySelector('.userName')
    //     const nameError = document.querySelector('.nameError')
    //     const userEmail = document.querySelector('.userEmail')
    //     const emailError = document.querySelector('.emailError')
    //     const userMessage = document.querySelector('.userMessage')
    //     const messageError = document.querySelector('.messageError')
    //     if (userName.value.length < 3 || userName.value.includes(" ") === true || userName.value === ""){
    //         nameError.textContent = "imię musi być dłuższe niż 3 litery"
    //     }
    //     else{
    //         nameError.textContent = ""
    //     }
    //     if (userEmail.value.includes('@') === false || userEmail.value === ""){
    //         console.log("brak");
    //         emailError.textContent = "brak znaków specjalnych"
    //     }
    //     else {
    //         console.log('posiada')
    //         emailError.textContent = ""
    //     }
    //     if (userMessage.value.length < 120 || userMessage.value === ""){
    //         console.log('zamało liter')
    //         messageError.textContent = "Wiadomośc powinna mieć conajmniej 120 znaków"
    //     }
    //     else{
    //         console.log('odpowiednia długośc')
    //         messageError.textContent = ""
    //     }
    // }
    return(
        <form className={'myForm'}>
            {error}
            <div className={"yourData"}>
                <div className="name">
                    <p>Wpisz swoje imię</p>
                    <input type={'text'} name={"userName"} className={'userName'} placeholder={'Imię'} name={'name'} id={'name'} onChange={updateField}/>
                    <div className={'nameError error'}></div>
                </div>
                <div className="email">
                    <p>Wpisz swoje email</p>
                    <input type={'email'} className={'userEmail'} placeholder={'abc@xyz.pl'} name={'email'} id={'email'} onChange={updateField}/>
                    <div className={'emailError error'}></div>
                </div>
            </div>
            <div className="message">
                <p>Wpisz swoją wiadomość</p>
                <textarea placeholder={'Treść wiadomości'} className={'userMessage'} name={'message'} id={'message'} onChange={updateField}/>
                <div className={'messageError error'}></div>
            </div>
            <button  onClick={handleSubmit}>Wyślij</button>
        </form>
        )
}
export default Form
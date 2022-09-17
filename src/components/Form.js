function Form(){
    function check(){
        const userName = document.querySelector('.userName')
        const nameError = document.querySelector('.nameError')
        const userEmail = document.querySelector('.userEmail')
        const emailError = document.querySelector('.emailError')
        const userMessage = document.querySelector('.userMessage')
        const messageError = document.querySelector('.messageError')
        if (userName.value.length < 3 || userName.value.includes(" ") === true || userName.value === ""){
            nameError.textContent = "imię musi być dłuższe niż 3 litery"
        }
        else{
            nameError.textContent = ""
        }
        if (userEmail.value.includes('@') === false || userEmail.value === ""){
            console.log("brak");
            emailError.textContent = "brak znaków specjalnych"
        }
        else {
            console.log('posiada')
            emailError.textContent = ""
        }
        if (userMessage.value.length < 120 || userMessage.value === ""){
            console.log('zamało liter')
            messageError.textContent = "Wiadomośc powinna mieć conajmniej 120 znaków"
        }
        else{
            console.log('odpowiednia długośc')
            messageError.textContent = ""
        }
    }
    return(
        <form className={'myForm'} >
            <div className={"yourData"}>
                <div className="name">
                    <p>Wpisz swoje imię</p>
                    <input type={'text'} name={"userName"} className={'userName'} placeholder={'Imię'} />
                    <div className={'nameError error'}></div>
                </div>
                <div className="email">
                    <p>Wpisz swoje email</p>
                    <input type={'email'} className={'userEmail'} placeholder={'abc@xyz.pl'}/>
                    <div className={'emailError error'}></div>
                </div>
            </div>
            <div className="message">
                <p>Wpisz swoją wiadomość</p>
                <textarea placeholder={'Treść wiadomości'} className={'userMessage'}/>
                <div className={'messageError error'}></div>
            </div>
            <button onClick={check}>Wyślij</button>
        </form>
        )
}
export default Form
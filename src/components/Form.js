function Form(){
    function check(){
        const userName = document.querySelector('.userName')
        const nameError = document.querySelector('.nameError')
        if (userName.value.length < 3){
            nameError.textContent = "imię musi być dłuższe niż 3 litery"
        }
        else{
            nameError.textContent = ""
        }
    }
    return(
        <form className={'myForm'} onChange={check}>
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
            <button>Wyślij</button>
        </form>
        )
}
export default Form
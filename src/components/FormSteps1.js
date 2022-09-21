import GiveThinksorange from "./GiveThinksorange";

function FormSteps1(){
    return(
        <div className={'formStep'}>
            <GiveThinksorange/>
        <div className={'formSteps'}>
            <div>
            <p>Krok 1/4</p>
            <h1>Zaznacz co chcesz oddać</h1>
            </div>
            <div>
            <label className={'container'}>
                <input type={"radio"} name={'what'} defaultChecked/> ubrania które nadają się do ponownego użycia
                <span className={'checkmark'}/>
            </label>
            <label className={'container'}>
                <input type={"radio"} name={'what'}/> ubrania,do wyrzucenia
                <span className={'checkmark'}/>
            </label>
            <label className={'container'}>
                <input type={"radio"} name={'what'}/> Zabawki
                <span className={'checkmark'}/>
            </label>
            <label className={'container'}>
                <input type={"radio"} name={'what'}/> książki
                <span className={'checkmark'}/>
            </label>
            <label className={'container'}>
                <input type={"radio"} name={'what'}/> inne
                <span className={'checkmark'}/>
            </label>
            </div>
            <div>
                <button>Dalej</button>
            </div>
        </div>
        </div>
    )
}
export default FormSteps1
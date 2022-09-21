function FormSteps4(){
    return(
        <div className="formStep">
        <div className={'formSteps'}>
            <div>
            <p>Krok 4/4</p>
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
            </div>
            <div>
            <div>
                <h3>Adres odbioru</h3>
                <label>
                    Ulica <input type={"text"}/>
                </label>
                <label>
                    Miasto <input type={"text"}/>
                </label>
                <label>
                    Kod pocztowy <input type={"text"}/>
                </label>
                <label>
                    Numer telefonu <input type={"text"}/>
                </label>
            </div>
            <div>
                <h3>Termin odbioru</h3>
                <label>
                Data <input type={"date"}/>
                </label>
                <label>
                Godzina <input type={"time"}/>
                </label>
                <label>
                Uwagi dla kuriera <textarea/>
            </label>
            </div>
            </div>
            <div>
            <button>Wstecz</button>
            <button>Dalej</button>
            </div>
        </div>
        </div>
    )
}

export default FormSteps4
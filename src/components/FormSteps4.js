function FormSteps4(){
    return(
        <div className="formStep">
        <div className={'formSteps'}>
            <div>
            <p>Krok 4/4</p>
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
            </div>
            <div className={'userAdres'}>
                <div className={'userAdresForm'}>
                    <h1>Adres odbioru</h1>
                    <div className={'adresForm'}>
                        <div className={'namesOfForm'}>
                            <p>Ulica </p>
                            <p>Miasto </p>
                            <p>Kod pocztowy</p>
                            <p>Numer telefonu </p>
                        </div>
                        <div className={'inputsOfForm'}>
                            <label>
                                <input type={"text"}/>
                            </label>
                            <label>
                                <input type={"text"}/>
                            </label>
                            <label>
                                <input type={"text"}/>
                            </label>
                            <label>
                             <input type={"text"}/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={"dataAndInputs"}>
                    <h1>Termin odbioru</h1>
                    <div className={'dataForm'}>
                        <div className={'namesOfForm'}>
                            <p>Data </p>
                            <p>Godzina </p>
                            <p>Uwagi dla kuriera</p>
                        </div>
                        <div className={'inputsOfForm'}>
                            <label>
                            <input type={"date"}/>
                            </label>
                            <label>
                                <input type={"time"}/>
                            </label>
                            <label>
                                <textarea/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FormSteps4
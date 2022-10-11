import React, {useEffect , useState} from "react";
function FormSteps4(){
    const [error,setError] = useState('.')
    const [formStep,setFormStep] = useState({
        street:'street',
        city:'city',
        ZIPCode:'code',
        telephoneNumber:'number',
        date:'date',
        time:'time',
        remarks:'remarks'
    })

    const handleAdresAndTime = (adresAndTime) => {
        setFormStep({
            ...formStep,
            [adresAndTime.target.name]: adresAndTime.target.value
        })
    }

     const adresAndTime = JSON.parse(localStorage.getItem('formStep'))
     const adresAndTimeSave = () =>{
        localStorage.setItem('formStep',JSON.stringify(formStep))
    }

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
                                <input
                                    type={"text"}
                                    name={'street'}
                                    onChange={handleAdresAndTime}
                                    placeholder={adresAndTime?.street}
                                />
                            </label>
                            <label>
                                <input
                                    type={"text"}
                                    name={'city'}
                                    onChange={handleAdresAndTime}
                                    placeholder={adresAndTime?.city}
                                />
                            </label>
                            <label>
                                <input
                                    type={"text"}
                                    name={'ZIPCode'}
                                    onChange={handleAdresAndTime}
                                    placeholder={adresAndTime?.ZIPCode}
                                />
                            </label>
                            <label>
                             <input
                                 type={"text"}
                                 name={'telephoneNumber'}
                                 onChange={handleAdresAndTime}
                                 placeholder={adresAndTime?.telephoneNumber}
                             />
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
                            <input
                                name={'date'}
                                type="text"
                                onChange={handleAdresAndTime}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                                placeholder={adresAndTime?.date}
                            />
                            </label>
                            <label>
                                <input
                                    type={"text"}
                                    name={'time'}
                                    onChange={handleAdresAndTime}
                                    onFocus={(e) => (e.target.type = "time")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    placeholder={adresAndTime?.time}
                                />
                            </label>
                            <label>
                                <textarea
                                    name={'remarks'}
                                    onChange={handleAdresAndTime}
                                    placeholder={adresAndTime?.remarks}
                                />
                            </label>
                            <button onClick={adresAndTimeSave}>Zmień</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FormSteps4
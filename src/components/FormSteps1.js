import GiveThinksorange from "./GiveThinksorange";
import {useEffect, useState} from "react";


function FormSteps1({data, setData}){
    const [actualValue, setActualValue] = useState(".");
    const inputHandler = (val) => {
        setActualValue(val);
        setData(prev => {
            return {
                ...prev,
                donation: val
            }
        })
    }
    useEffect(() => {
        console.log(actualValue);
        console.log(data.donation);
        console.log(actualValue === data.donation);
    }, [data.donation]);

    return(
        <div className={'formStep'}>
            <GiveThinksorange/>
            <div className={'formSteps'}>
                <div>
                    <p>Krok 1/4</p>
                    <h1>Zaznacz co chcesz oddać</h1>
                </div>
                <div>
                    <div className={'labelDiv'}>
                    <label className={'container'}
                    >
                        <input
                            type={"radio"}
                            className={'radio'}
                            name={'what'}
                            value={'ubrania'}
                            checked={actualValue === data.donation}
                        />
                        <span
                            className={'checkmark'}
                            onClick={() => inputHandler("ubrania które nadają się do ponownego użycia")}
                        />
                    </label>
                        ubrania które nadają się do ponownego użycia
                    </div>
                    <div className={'labelDiv'}>
                    <label
                        className={'container'}
                    >
                        <input
                            type={"radio"}
                            className={'radio1'}
                            name={'what'}
                            value={'ubrania,do wyrzucenia'}
                            checked={actualValue === data.donation}
                        />
                        <span
                            className={'checkmark'}
                            onClick={() => inputHandler("ubrania,do wyrzucenia")}
                        />
                    </label>
                        ubrania,do wyrzucenia
                    </div>
                    <div className={'labelDiv'}>
                    <label
                        className={'container'}
                    >
                        <input
                            type={"radio"}
                            className={'radio2'}
                            name={'what'}
                            value={'zabawki'}
                            checked={actualValue === data.donation}
                        />
                        <span
                            className={'checkmark'}
                            onClick={() => inputHandler("zabawki")}
                        />
                    </label>
                        zabawki
                    </div>
                    <div className={'labelDiv'}>
                    <label
                        className={'container'}
                    >
                        <input
                            type={"radio"}
                            className={'radio3'}
                            name={'what'}
                            value={'książki'}
                            checked={actualValue === data.donation}
                        />
                        <span
                            className={'checkmark'}
                            onClick={() => inputHandler("książki")}
                        />
                    </label>
                        książki
                    </div>
                    <div className={'labelDiv'}>
                    <label
                        className={'container'}
                    >
                        <input
                            type={"radio"}
                            className={'radio5'}
                            name={'what'}
                            value={'inne'}
                            checked={actualValue === data.donation}
                        />
                        <span
                            className={'checkmark'}
                            onClick={() => inputHandler("inne")}
                        />
                    </label>
                        inne
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormSteps1
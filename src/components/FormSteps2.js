import GiveThinksorange from "./GiveThinksorange";
import {useEffect, useState} from "react";

function FormSteps2() {
    const howManyBags = [
        {
            key:0,
            text:'-wybierz-',
            value:0,
        },
        {
            key:1,
            text:'1',
            value:1,
        },
        {
            key:2,
            text:'2',
            value:2,
        },
        {
            key:3,
            text:'3',
            value:3,
        },
        {
            key:4,
            text:'4',
            value:4,
        },
        {
            key:5,
            text:'5',
            value:5,
        }
    ]
    useEffect(() => {
        localStorage.setItem('amount',JSON.stringify(selectedValue))
    }, );

    const [selectedValue, setSelectedValue] = useState(".");
    return(
        <div className={'formStep'}>
        <GiveThinksorange/>
        <div className={'formSteps'}>
            <div>
            <p>Krok 2/4</p>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <label>
                Liczba 60l worków :
                <select
                    name="bags"
                    id="bags"
                    className={'bags'}
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    {
                        howManyBags.map((howManyBag) => (
                            <option value = {howManyBag.value} key = {howManyBag.key}>{howManyBag.text}</option>
                        ))
                    }
                </select>
            </label>
            </div>
            <p>{selectedValue}</p>
        </div>
        </div>
    )
}
export default FormSteps2
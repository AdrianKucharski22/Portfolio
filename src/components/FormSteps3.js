import GiveThinksorange from "./GiveThinksorange";
import {useState} from "react";

function FormSteps3(data,setData){
    const localizationOptions = [
        {
            value:'-wybierz-',
            text:'-wybierz-',
        },
        {
            value:'Poznań',
            text:'Poznań',
        },
        {
            value:'Warszawa',
            text:'Warszawa',
        },
        {
            value:'Kraków',
            text:'Kraków',
        },
        {
            value:'Wrocław',
            text:'Wrocław',
        },
        {
            value:'Katowice',
            text:'Katowice',
        },
    ]
    const [localizationSelect,setLocalizationSelect] = useState('.')
    const [toWhoCheck,setToWhoChecked] = useState('')
    const toWho_array = [...toWhoCheck]
    const checkHandler = (thinks) =>{
        if (toWho_array.includes(thinks) === true){
                toWho_array.splice(toWho_array.indexOf(thinks),1)
                console.log(toWho_array)
        }
        else {
            toWho_array.push(thinks);
            console.log(toWho_array)
        }
    }



    return(
        <div className={'formStep'}>
            <GiveThinksorange/>
        <div className={'formSteps'}>
            <div>
                <p>Krok 3/4</p>
                <h1>Lokalizacja</h1>
                <select
                    name="localization"
                    id="localization"
                    className={'localization'}
                    onChange={e => setLocalizationSelect(e.target.value)}>
                        {localizationOptions.map((localizationOption =>(
                            <option value={localizationOption.value}>{localizationOption.text}</option>
                            )))}
                </select>
                {localizationSelect}
            </div>
            <h1>Komu chcesz pomóc?</h1>
            <div className={'checkboxes'}>
                <label className={'containerBox'}>
                    <input
                        type={"checkbox"}
                        name={'helpGroups'}
                        value={'dzieciom'}
                    />
                    <p
                        onClick={() =>checkHandler('dzieciom')}>
                        dzieciom
                    </p>
                    <span className={'checkmarkBox'}/>
                </label>
                <label className={'containerBox'}>
                    <input
                        type={"checkbox"}
                        name={'helpGroups'}
                        value={'samotnym matkom'}
                    />
                    <p
                        onClick={() =>checkHandler('samotnym matkom')}>
                        samotnym matkom
                    </p>
                    <span className={'checkmarkBox'}/>
                </label>
                <label className={'containerBox'}>
                    <input
                        type={"checkbox"}
                        name={'helpGroups'}
                        value={'bezdomnym'}
                    />
                    <p
                        onClick={() =>checkHandler('bezdomnym')}>
                        bezdomnym
                    </p>
                    <span
                        className={'checkmarkBox'}
                    />
                </label>

                <label className={'containerBox'}>
                    <input type={"checkbox"} name={'helpGroups'}/>
                    <p onClick={() =>checkHandler('niepełnosprawnym')}>
                        niepełnosprawnym
                    </p>
                    <span className={'checkmarkBox'}/>
                </label>

                <label className={'containerBox'}>
                    <input type={"checkbox"} name={'helpGroups'}/>
                    <p onClick={() =>checkHandler('osobom starszym')}>
                        osobom starszym
                    </p>
                    <span className={'checkmarkBox'}/>
                </label>
            </div>
            <div className={'optionalName'}>
                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <input type={'text'} className={'organizationName'}/>
            </div>
        </div>
        </div>
    )
}

export default FormSteps3
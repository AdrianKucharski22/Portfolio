import GiveThinksorange from "./GiveThinksorange";
import {useState} from "react";

function FormSteps3(){
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
            </div>
            <h1>Komu chcesz pomóc?</h1>
            <div className={'checkboxes'}>
                <label className={'containerBox'}>
                    <input type={"checkbox"} name={'helpGroups'}/><p>dzieciom</p>
                    <span className={'checkmarkBox'}/>
                </label>
                <label className={'containerBox'}>
                    <input type={"checkbox"} name={'helpGroups'}/><p>samotnym matkom</p>
                    <span className={'checkmarkBox'}/>
                </label>
                <label className={'containerBox'}>
                    <input type={"checkbox"} name={'helpGroups'}/><p>bezdomnym</p>
                    <span className={'checkmarkBox'}/>
                </label>
                <label className={'containerBox'}>
                    <input type={"checkbox"} name={'helpGroups'}/><p>niepełnosprawnym</p>
                    <span className={'checkmarkBox'}/>
                </label>
                <label className={'containerBox'}>
                    <input type={"checkbox"} name={'helpGroups'}/><p>osobom starszym</p>
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
import GiveThinksorange from "./GiveThinksorange";

function FormSteps3(){
    return(
        <div className={'formStep'}>
            <GiveThinksorange/>
        <div className={'formSteps'}>
            <div>
            <p>Krok 3/4</p>
            <h1>Lokalizacja</h1>
            <select name="localization" id="localization">
                <option value="-">-wybierz-</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
            </select>
            </div>
            <div>
            <h1>Komu chcesz pomóc?</h1>
            <label>
            <input type={"checkbox"} name={'helpGroups'}/>dzieciom
            </label>
            <label>
                <input type={"checkbox"} name={'helpGroups'}/>samotnym matkom
            </label>
            <label>
                <input type={"checkbox"} name={'helpGroups'}/>bezdomnym
            </label>
            <label>
                <input type={"checkbox"} name={'helpGroups'}/>niepełnosprawnym
            </label>
            <label>
                <input type={"checkbox"} name={'helpGroups'}/>osobom starszym
            </label>
            </div>
            <div>
            <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
            <input type={'text'}/>
            </div>
            <div>
            <button>Wstecz</button>
            <button>Dalej</button>
            </div>
        </div>
        </div>
    )
}

export default FormSteps3
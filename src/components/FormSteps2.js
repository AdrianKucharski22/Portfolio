import GiveThinksorange from "./GiveThinksorange";

function FormSteps2(){
    return(
        <div className={'formStep'}>
        <GiveThinksorange/>
        <div className={'formSteps'}>
            <div>
            <p>Krok 2/4</p>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <label>
                Liczba 60l worków :
                <select name="bags" id="bags" className={'bags'}>
                    <option value="-">-wybierz-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            </div>
            <div>
            <button>Wstecz</button>
            <button>Dalej</button>
            </div>
        </div>
        </div>
    )
}
export default FormSteps2
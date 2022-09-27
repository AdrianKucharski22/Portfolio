import decoration from '../assets/Decoration.svg'
export default function FormStepsEnd(){
    return(
        <div className={'formSteps'}>
            <h1>
                Dziekujemy za przesłanie formularza <br/> na maila prześlemy wszelkie<br/> informacje o odbiorze
            </h1>
            <img src={decoration}/>
        </div>
    )
}
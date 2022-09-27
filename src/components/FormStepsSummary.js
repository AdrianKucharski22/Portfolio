import icon1 from '../assets/Icon-1.svg'
import icon4 from '../assets/Icon-4.svg'
export default function  FormStepsSummary(){
    return(
        <div className={'formSteps'}>
            <h1>Podumowanie Twojej darowizny</h1>
            <p>
                Oddajesz:
            </p>
            <div className={'summaryBags'}><img src={icon1}/>4 worki, ubrania w dobrym stanie,dzieciom</div>
            <div className={'summaryLocalization'}><img src={icon4}/>dla lokalizacji: Warszawa</div>
            <div className={'summary'}>
                <div>
                    <h2>Adres odbioru:</h2>
                    <div className={'summaryAdres'}>
                         <div>
                            <p>Ulica</p>
                            <p>Miasto</p>
                            <p>Kod pocztowy</p>
                            <p>Numer telefonu</p>
                        </div>
                        <div>
                            <p>ul.</p>
                            <p>miasto</p>
                            <p>kod</p>
                            <p>nrtel</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Termin odbioru:</h2>
                    <div className={'summaryData'}>
                        <div>
                            <p>Data</p>
                            <p>Godzina</p>
                            <p>Uwagi dla kuriera</p>
                        </div>
                        <div>
                            <p>data</p>
                            <p>godzina</p>
                            <p>uwagi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
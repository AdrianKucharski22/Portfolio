import icon1 from '../assets/Icon-1.svg'
import icon4 from '../assets/Icon-4.svg'
export default function  FormStepsSummary(){
    const adresAndDate = JSON.parse(localStorage.getItem('formStep'))
    const opcjonalOrganizatioNname = JSON.parse(localStorage?.getItem('organizationName'))
    return(
        <div className={'formSteps'}>
            <h1>Podsumowanie Twojej darowizny</h1>
            <p>
                Oddajesz:
            </p>
            <div className={'summaryBags'}>
                <img src={icon1}/>
                {JSON.parse(localStorage.getItem('amount'))}
                , {JSON.parse(localStorage.getItem('item'))}
                , {JSON.parse(localStorage.getItem('toWho'))}
            </div>
            <div className={'summaryLocalization'}>
                <img src={icon4} alt={'icon4'}/>dla lokalizacji:
                {JSON.parse(localStorage.getItem('localization'))}
                , {opcjonalOrganizatioNname?.organizationName}
            </div>
            <div className={'summary'}>
                <div>
                    <h2>Adres odbioru:</h2>
                    <div className={'summaryAdres'}>
                         <div>
                            <p>Ulica:</p>
                            <p>Miasto:</p>
                            <p>Kod pocztowy:</p>
                            <p>Numer telefonu:</p>
                        </div>
                        <div>
                            <p>ul.{adresAndDate?.street}</p>
                            <p>{adresAndDate?.city}</p>
                            <p>{adresAndDate?.ZIPCode}</p>
                            <p>{adresAndDate?.telephoneNumber}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Termin odbioru:</h2>
                    <div className={'summaryData'}>
                        <div>
                            <p>Data:</p>
                            <p>Godzina:</p>
                            <p>Uwagi dla kuriera:</p>
                        </div>
                        <div>
                            <p>{adresAndDate?.date}</p>
                            <p>{adresAndDate?.time}</p>
                            <p>{adresAndDate?.remarks}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
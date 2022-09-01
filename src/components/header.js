import {Link} from 'react-router-dom'



export function Header(){
    return(
        <nav>
            <div className={'main'}>
                <div className={'login'}>
                    <Link to={'/Login'} alt={'Login'}><p>Zaloguj</p></Link>
                    <Link to={'/Register'} alt={'Register'}><p>Załóż konto</p></Link>
                </div>
                <div className={'navInfo'}>
                    <ul>
                        <li>
                            Start
                        </li>
                        <a href={'#steps'}><li>
                            O co chodzi?
                        </li></a>
                        <a href={'#aboutUs'}><li>
                            O nas
                        </li></a>
                        <li>
                            Fundacja i organizacja
                        </li>
                        <li>
                            Kontakt
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}
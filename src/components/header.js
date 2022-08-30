import {Link} from 'react-router-dom'
import HomeHeroImage from "../assets/Home-Hero-Image.jpg";
import Decoration from "../assets/Decoration.svg";
import Login from "./Login";


export function Header(){
    return(
        <nav>
            <div className={'main'}>
                <div className={'login'}>
                    <Link to={'/Login'} alt={'Login'}><p>Zaloguj</p></Link>
                    <a><p>Załóż konto</p></a>
                </div>
                <nav>
                    <ul>
                        <li>
                            Start
                        </li>
                        <li>
                            O co chodzi?
                        </li>
                        <li>
                            O nas
                        </li>
                        <li>
                            Fundacja i organizacja
                        </li>
                        <li>
                            Kontakt
                        </li>
                    </ul>
                </nav>

            </div>
        </nav>
    )
}
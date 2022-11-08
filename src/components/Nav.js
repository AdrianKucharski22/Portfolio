import { Link } from 'react-router-dom'
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./fire";
import UserNav from "./UserNav";
function scrolSteps() {
    const steps = document.querySelector('.stepsName');
    steps.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: "nearest"
    });
}
function scrolAboutUs() {
    const aboutUs = document.querySelector('.aboutUs');
    aboutUs.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: "nearest"
    });
}
function scrolFundaction() {
    const fundaction = document.querySelector('.organization');
    fundaction.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: "nearest"
    });
}
function scrolContact() {
    const contact = document.querySelector('.copyright');
    contact.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: "nearest"
    });
}


export default function Nav(){
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })
    return(
        <nav>
            <div className={'main'}>
                <UserNav/>
                <div className={'navInfo'}>
                    <ul>
                        <Link to={"/portfolio"}><li>
                            Start
                        </li></Link>
                        <a href={'#steps'} onClick={scrolSteps}><li>
                            O co chodzi?
                        </li></a>
                        <a href={'#aboutUs'} onClick={scrolAboutUs}><li>
                            O nas
                        </li></a>
                        <a href={'#fundaction'} onClick={scrolFundaction}><li>
                            Fundacja i organizacja
                        </li></a>
                        <a href={'#contact'} onClick={scrolContact}><li>
                            Kontakt
                        </li></a>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

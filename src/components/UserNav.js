import {Link} from "react-router-dom";
import {useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "./fire";

export default function UserNav(){
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })
    const logout = async () => {
        await signOut(auth)
    }
    if (user?.email){
    return(
        <div className={'login'}>
            <h4>{user?.email}</h4>
            <Link to={'/GiveThinks'} alt={'GiveThinks'}><p>Oddaj</p></Link>
            <Link to={'/Logout'} alt={'Logout'} onClick={logout}><p>Wyloguj</p></Link>
        </div>
    )}
    else{
        return(
        <div className={'login'}>
            <Link to={'/Login'} alt={'Login'}><p>Zaloguj</p></Link>
            <Link to={'/Register'} alt={'Register'}><p>Załóż konto</p></Link>
        </div>
        )
    }
}

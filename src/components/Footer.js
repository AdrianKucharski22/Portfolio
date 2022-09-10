import Decoration from "../assets/Decoration.svg"
import '../scss/main.scss'
import ig from "../assets/Instagram.svg";
import fb from "../assets/Facebook.svg";
import BackgrounContactForm from "../assets/Background-Contact-Form.jpg"
function Footer(){
    return(
            <footer>
                <img src={BackgrounContactForm} className={"bgImg"}/>
                <div className="form">
                    <h1>Skontaktuj się z nami</h1>
                    <img src={Decoration} alt={'decoration'}/>
                    <form>
                        <div className="name">
                            <p>Wpisz swoje imię</p>
                            <input type={'text'} placeholder={'Imię'}/>
                        </div>
                        <div className="email">
                            <p>Wpisz swoje email</p>
                            <input type={'email'} placeholder={'abc@xyz.pl'}/>
                        </div>
                        <div className="message">
                            <p>Wpisz swoją wiadomość</p>
                            <textarea placeholder={'Treść wiadomości'}/>
                        </div>
                        <button>Wyślij</button>
                    </form>
                </div>
                <div className="copyright">
                <p>Copyright by Coders Lab</p>
                    <div className="icons">
                        <img src={ig}/>
                        <img src={fb}/>
                    </div>
            </div>
            </footer>
    );
}
export default Footer
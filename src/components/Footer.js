import Decoration from "../assets/Decoration.svg"
import '../scss/main.scss'
import ig from "../assets/Instagram.svg";
import fb from "../assets/Facebook.svg";
import Form from "./Form";
function Footer(){
    return(
            <footer>
                <div className="form">
                    <h1>Skontaktuj się z nami</h1>
                    <img src={Decoration} alt={'decoration'}/>
                    <Form/>
                </div>
                <div className="copyright">
                <p>Copyright by Coders Lab</p>
                    <div className="icons">
                        <img src={ig} alt={''}/>
                        <img src={fb} alt={''}/>
                    </div>
            </div>
            </footer>
    );
}
export default Footer
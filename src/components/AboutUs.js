import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";

function AboutUs() {
    return (
        <div className={'aboutUs'}>
            <div className={'info'}>
                <h1>O nas</h1>
                <img src={Decoration}/>
                <p>
                    Nori grape beet broccoli kambu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea praire tumip leek leniti tumrip greens parsnip.
                </p>
                <img src={Signature}/>
            </div>
            <div className={'imageAbout'}>
                <img src={People}/>
            </div>
        </div>
    );
}

export default AboutUs;
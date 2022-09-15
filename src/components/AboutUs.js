import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";

function AboutUs() {
    return (
        <div className={'aboutUs'}>
            <div className={'info'}>
                <h1>O nas</h1>
                <img src={Decoration} alt={''}/>
                <p>
                    Nori grape beet broccoli kambu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea praire tumip leek leniti tumrip greens parsnip.
                </p>
                <img src={Signature} alt={''}/>
            </div>
            <div className={'imageAbout'}>
                <img src={People} alt={''}/>
            </div>
        </div>
    );
}

export default AboutUs;
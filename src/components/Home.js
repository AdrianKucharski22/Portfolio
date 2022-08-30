import {Link} from "react-router-dom";
import HomeHeroImage from "../assets/Home-Hero-Image.jpg"
import Decoration from "../assets/Decoration.svg"
import Icon1 from "../assets/Icon-1.svg"
import Icon2 from "../assets/Icon-2.svg"
import Icon3 from "../assets/Icon-3.svg"
import Icon4 from "../assets/Icon-4.svg"
import People from "../assets/People.jpg"
import Signature from "../assets/Signature.svg"
import {Header} from "./header";

export function Home() {
    return(
        <div className={'Home'}>
            <header>
                <div className={'image'}>
                    <img src={HomeHeroImage}/>
                </div>
                <div className={'headerInfo'}>
                    <Header/>
                    <div>
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    </div>
                    <div>
                        <img src={Decoration} alt={'decoration'}/>
                    </div>
                    <div>
                        <button>Oddaj rzeczy</button>
                        <button>Zorganizuj zbiórkę</button>
                    </div>
                </div>
            </header>
            <main>
                <div className={'bags'}>
                    <h1>10</h1>
                    <h2>ODDANYCH WORKÓW</h2>
                    <p>
                        Lorem ipsum dolor aret Lorem ipsum dolor aret Lorem ipsum dolor
                        aret Lorem ipsum dolor aret
                    </p>
                </div>
                <div className={'organization'}>
                    <h1>5</h1>
                    <h2>WSPARTYCH ORGANIZACJI</h2>
                    <p>
                        Lorem ipsum dolor aret Lorem ipsum dolor aret
                        Lorem ipsum dolor aret Lorem ipsum dolor aret
                    </p>
                </div>
                <div className={'rebounds'}>
                    <h1>7</h1>
                    <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                    <p>
                        Lorem ipsum dolor aret Lorem ipsum dolor aret Lorem ipsum dolor aret
                        Lorem ipsum dolor aret
                    </p>
                </div>
            </main>
            <article>
                <div className={'stepsName'}>
                    <h1>Wystarczą 4 proste kroki</h1>
                    <img src={Decoration}/>
                </div>
                <div className={"steps"}>
                <div className="chose">
                        <img src={Icon1}/>
                        <h2>Wybierz rzeczy</h2>
                        <hr/>
                        <p>Ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="chose">
                        <img src={Icon2}/>
                        <h2>Spakuj je</h2>
                       <hr/>
                        <p>Skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="chose">
                        <img src={Icon3}/>
                        <h2>Zdecyduj komu chcesz pomóc</h2>
                        <hr/>
                        <p>Wybierz zaufane miejsce</p>
                    </div>
                    <div className="chose">
                        <img src={Icon4}/>
                        <h2>Zamów kuriera</h2>
                        <hr/>
                        <p>Kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <button>ODDAJ RZECZY</button>
            </article>
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
        </div>
    )
}
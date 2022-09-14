import { useState } from "react";
import Decoration from "../assets/Decoration.svg"
import Fundactions from "./Fundactions";
import Organizations from "./Organizations";
import Collections from "./Collection";
import login from "./Login";
function WhoWeHelp(){

    const [id, setID] = useState(1);

    const handleButton = (id) => {
        setID(id);
    }

    const returnComponent = (id) => {
        if (id === 1) {
            return <Fundactions />
        }
        else if (id === 2) {return <Organizations/>}
        else  {return <Collections/>}
    }
    return(
        <section className={'organization'}>
            <div className="who">
                <h1>Komu pomagamy?</h1>
                <img src={Decoration} alt={''}/>
                <div className="btn">
                    <button onClick={() => handleButton(1)} className={id === 1 ?'btn1 active' : 'btn1'}>Fundacjom</button>
                    <button onClick={() => handleButton(2)} className={id === 2 ?'btn2 active' : 'btn2'}>Organizacjom pozarządowym</button>
                    <button onClick={() => handleButton(3)} className={id === 3 ?'btn3 active' : 'btn3'}>Lokalnym zbiórkom</button>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consecteur adipiscing elit sed do eiusmod tempor
                </p>
            </div>
            <div className={'organizationThinks'}>
                {returnComponent(id)}
            </div>
        </section>
        )
}
export default WhoWeHelp;
import React, {useState} from 'react';
import FormSteps1 from "./FormSteps1";
import FormSteps2 from "./FormSteps2";
import FormSteps3 from "./FormSteps3";
import FormSteps4 from "./FormSteps4";
import FormStepsSummary from "./FormStepsSummary";
import FormStepsEnd from "./FormStepsEnd";

const GiveThinksForm = () => {
    const [id, setId] = useState(0)
    const [data, setData] = useState({})
    const handleButton = () => {
        setId(prevState => prevState + 1)
    }
    const backHandleButton = () => {
        setId(prevState => prevState - 1)
    }
    const returnComponent = (id) => {
        if (id === 0) {
            return(
                <div className={'formStep'}>
                    <FormSteps1 data={data} setData={setData}/>
                    <button onClick={() => handleButton()}>Dalej</button>
                </div>
            )
        }
        else if (id === 1) {
            return (
                <div className={'formStep'}>
                    <FormSteps2/>
                    <button onClick={() => backHandleButton()}>Wstecz</button>
                    <button onClick={() => handleButton()}>Dalej</button>
                </div>
            )
        }
        else if (id === 2) {
            return(
                <div className={'formStep'}>
                    <FormSteps3/>
                    <button onClick={() => backHandleButton()}>Wstecz</button>
                    <button onClick={() => handleButton()}>Dalej</button>
                </div>
            )
        }
        else if (id === 3) {
            return (
                <div className={'formStep'}>
                    <FormSteps4/>
                    <button onClick={() => backHandleButton()}>Wstecz</button>
                    <button onClick={() => handleButton()}>Dalej</button>
                </div>
            )
        }
        else if ( id===4 ) {
            console.log(id)
            return (
            <div className={'formStep'}>
                <FormStepsSummary/>
                <button onClick={() => backHandleButton()}>Wstecz</button>
                <button onClick={() => handleButton()}>Potwierdzam</button>
            </div>
        )
        }
        else {
            return(
                <FormStepsEnd/>
            )
        }
    }
    return (
        <div className={'formStep'}>
            {returnComponent(id)}
        </div>
    );
};

export default GiveThinksForm;
import Decoration from "../assets/Decoration.svg"
function WhoWeHelp(){
    return(
        <section className={'organization'}>
            <div className="who">
                <h1>Komu pomagamy?</h1>
                <img src={Decoration}/>
                <div className="btn">
                    <button className={'btn1'}>Fundacjom</button>
                    <button className={'btn2'}>Organizacjom pozarządowym</button>
                    <button className={'btn3'}>Lokalnym zbiórką</button>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consecteur adipiscing elit sed do eiusmod tempor
                </p>
            </div>
            <div className={'organizationThinks'}>
                <div className="organizationInfo">
                    <div className="organizationName">
                        <h1>Organizacja "Lorem Ipsum1"</h1>
                        <p>Quis varius quam quisque id diam vel quam elementum polvinar</p>
                    </div>
                    <div className="organizationAdres">
                        <p>Egestas,sed,tempus</p>
                    </div>
                </div>
                <div className="organizationInfo">
                    <div className="organizationName">
                        <h1>Organizacja "Lorem Ipsum1"</h1>
                        <p>Quis varius quam quisque id diam vel quam elementum polvinar</p>
                    </div>
                    <div className="organizationAdres">
                        <p>Egestas,sed,tempus</p>
                    </div>
                </div>
                <div className="organizationInfo">
                    <div className="organizationName">
                        <h1>Organizacja "Lorem Ipsum1"</h1>
                        <p>Quis varius quam quisque id diam vel quam elementum polvinar</p>
                    </div>
                    <div className="organizationAdres">
                        <p>Egestas,sed,tempus</p>
                    </div>
                </div>
                <div className="page">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
        </section>
        )
}
export default WhoWeHelp;
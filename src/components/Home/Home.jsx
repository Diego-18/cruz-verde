import Navbar from '../Navbar/Navbar.jsx';

import { photo2 } from "../../assets/img/img";
import './Home.css'

export default () => {
    return (
        <section className="step-0">
            <Navbar NavStyle="1" />
            <div className="cstm-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 section-left">
                        <p className="label-form">Solicita tu turno virtual</p>
                        <span className="sublabel-form">y realiza todos tus tramites sin filas.</span>

                        <p className="subtitle-process"> Como solicitar tu turno</p>

                        <ol>
                            <li className='item-list'>Selecciona la oficina mas cercana.</li>
                            <li className='item-list'>Ingresa tus datos.</li>
                            <li className='item-list'>Selecciona el servicio.</li>
                            <li className='item-list'>Verifica tu informacion.</li>
                        </ol>
                        <button onClick="" type='submit' className="btn cstm-btn">Solicitar Turno</button>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 section-right">
                        <img src={photo2} alt="photo" className="photo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
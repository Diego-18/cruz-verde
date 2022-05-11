import Navbar from '../../components/Navbar/Navbar.jsx';
import { photo2 } from "../../assets/img/img";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction.jsx";
import infoSede from "../../assets/data/info.json";
import './Step3.css'

const Step2 = props => {
    const { state, action } = useStateMachine(updateAction);
    const { handleSubmit, register } = useForm({
        defaultValues: state.yourDetails
    });

    const Step3 = data => {
        action(data);
    };

    return (
        <div className="step-3">
            <Navbar NavStyle="2" />
            <div className="cstm-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 section-left">
                        <p className="label-form">Verifica tu información.</p>
                        <div className="data-patient mt-4">
                            <p className="label-patient">{state.yourDetails.firstName} {state.yourDetails.secondName}</p>
                            <p className="label-patient">{state.yourDetails.firstLastName} {state.yourDetails.secondLastName}</p>
                            <p className="sublabel-patient">{state.yourDetails.documentType}. {state.yourDetails.nDocument}</p>
                        </div>
                        <p className="label-service"> Consulta Externa </p>

                        <div className="data-sede">
                            <p className="sede-title">{state.yourDetails.sede}</p>
                            {
                                infoSede.map((item, index) => (
                                    <div key={index}>
                                        {item.name === state.yourDetails.sede ? (
                                            <div>
                                                <p className="sede-direccion">
                                                    {item.location}
                                                </p>
                                                <p className="sede-horario">
                                                    Horario: {item.schedule}
                                                </p>
                                            </div>
                                        ) : null}
                                    </div>
                                ))
                            }
                        </div>
                        <button className="btn cstm-btn">Aceptar</button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div className="section-right">
                            <img src={photo2} alt="photo" className="photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Step2;
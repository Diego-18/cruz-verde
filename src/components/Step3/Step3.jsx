import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar.jsx';
import { photo2 } from "../../assets/img/img";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import infoSede from "../../assets/data/info.json";
import './Step3.css'
import { logo } from '../../assets/img/img.jsx';
import Modal from "react-modal";
import clearAction from "../../clearAction.jsx";


const Step3 = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(clearAction);

    const navigate = useNavigate();
    const onSubmit = (data) => {
        action(data);
        action();
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const Back = data => {
        action();
        navigate("/s2");
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
                            <button onClick={toggleModal} className="btn cstm-btn">Aceptar</button>

                            <button onClick={Back} className="btn cstm-btn d-md-none d-lg-none d-xl-none">Atras</button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div className="section-right">
                            <img src={photo2} alt="photo" className="photo" />
                        </div>
                    </div>

                    <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        className="infoModal"
                        overlayClassName="Overlay"
                        closeTimeoutMS={500}
                    >
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="modal-header">
                                    <img src={logo} alt="logo" className="logo-modal" />
                                </div>

                                <div className="modal-body">
                                    <p className="label-form">Haz solicitado tu turno con exito.</p>
                                    <p className="label-title">Servicio:</p>
                                    <p className="label-text">Consulta Externa</p>
                                    <p className="label-title">Dia:</p>
                                    <p className="label-text">10-05-2021</p>
                                    <p className="label-title">Hora:</p>
                                    <p className="label-text">10:00 am</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn cstm-btn-2">Solicitar nuevo turno</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>

    );
}

export default Step3;
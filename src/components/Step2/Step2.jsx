import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar.jsx';
import { photo1 } from "../../assets/img/img";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction.jsx";
import infoSede from "../../assets/data/info.json";
import './Step2.css'

const Step2 = props => {
    const { state, action } = useStateMachine(updateAction);
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: state.yourDetails
    });

    const navigate = useNavigate();
    const Step3 = data => {
        action(data);
        navigate("../s3");
    };

    return (
        <div className="step-2">
            <Navbar NavStyle="2" />
            <div className="cstm-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 section-left">
                        <p className="label-form">Ingesa tus datos</p>
                        <form onSubmit={handleSubmit(Step3)}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-3 mt-4">
                                    <select className="cstm-select form-control"
                                        {...register('documentType', { required: true })}>
                                        <option value="">Tipo de Documento</option>
                                        <option value="CE">Cedula de Extranjeria</option>
                                        <option value="CC">Cedula de Ciudadania</option>
                                    </select>
                                    {errors.documentType && <span className="error-message">Este campo es requerido.</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
                                    <input type="text" className="cstm-input form-control" placeholder="Numero de Documento"
                                        {...register('nDocument', { required: true })} />
                                    {errors.nDocument && <span className="error-message">Este campo es requerido.</span>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
                                    <input type="text" className="cstm-input form-control" placeholder="Primer Nombre"
                                        {...register('firstName', { required: true })}
                                    />
                                    {errors.firstName && <span className="error-message">Este campo es requerido.</span>}
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
                                    <input type="text" className="cstm-input form-control" placeholder="Segundo Nombre"
                                        {...register('secondName', { required: "El segundo nombre es un campo requerido." })}
                                    />
                                    {errors.secondName && <span className="error-message">Este campo es requerido.</span>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
                                    <input type="text" className="cstm-input form-control" placeholder="Primer Apellido"
                                        {...register('firstLastName', { required: true })}
                                    />
                                    {errors.firstLastName && <span className="error-message">Este campo es requerido.</span>}
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
                                    <input type="text" className="cstm-input form-control" placeholder="Segundo Apellido"
                                        {...register('secondLastName', { required: true })}
                                    />
                                    {errors.secondLastName && <span className="error-message">Este campo es requerido.</span>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4 mt-3">
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
                            </div>

                            <button type="submit" className="btn cstm-btn">Siguiente</button>
                        </form>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div className="section-right">
                            <img src={photo1} alt="photo" className="photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Step2;
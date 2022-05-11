import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar.jsx';
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction.jsx";
import infoSede from "../../assets/data/info.json";
import './Step1.css';

const Step1 = props => {
    const { state, action } = useStateMachine(updateAction);
    const { handleSubmit, register } = useForm({
        defaultValues: state.yourDetails,
        mode: "onChange"
    });

    const navigate = useNavigate();
    const Step2 = data => {
        action(data);
        navigate("../s2");
    };

    return (
        <div className="step-1">
            <Navbar NavStyle="2" />
            <div className="cstm-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg- section-left">
                        <form onSubmit={handleSubmit(Step2)}>
                            <p className="label-form">Selecciona la oficina mas cercana</p>
                            <input type="search" className='search' />
                            {infoSede.map((item, index) => (
                                <div key={index}>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" {...register('sede', { required: true })} value={item.name} />
                                        <label className="form-check-label">
                                            {item.name}
                                        </label>

                                        <p>{item.location}</p>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                            <button type='submit' className="btn cstm-btn">Seleccionar</button>
                        </form>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div className="section-right">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import Navbar from "../Navbar/Navbar.jsx";
import updateAction from "../../updateAction.jsx";
import infoSede from "../../assets/data/info.json";
import "./Step1.css";

const Step1 = (props) => {
	const { state, action } = useStateMachine(updateAction);
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: state.yourDetails,
		mode: "onChange",
	});

	const navigate = useNavigate();

	const Back = (data) => {
		action();
		navigate("/");
	};

	const Step2 = (data) => {
		action(data);
		navigate("/s2");
	};

	return (
		<div className="step-1">
			<Navbar NavStyle="2" />
			<div className="cstm-container">
				<div className="card">
					<form onSubmit={handleSubmit(Step2)}>
						<p className="label-form">
							Selecciona la oficina más cercana
						</p>
						{infoSede.map((item, index) => (
							<div key={index}>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										{...register("sede", {
											required:
												"Debes seleccionar una oficina, no puede quedar vacío.",
										})}
										value={item.name}
									/>
									<label className="form-check-label">
										{item.name}
									</label>

									<p>{item.location}</p>
								</div>
								<hr />
							</div>
						))}
						{errors.sede && (
							<span className="error-message">
								Este campo es requerido.
							</span>
						)}

						<button type="submit" className="btn cstm-btn">
							Seleccionar
						</button>

						<button
							onClick={Back}
							className="btn cstm-btn d-md-none d-lg-none d-xl-none"
						>
							Atrás
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Step1;

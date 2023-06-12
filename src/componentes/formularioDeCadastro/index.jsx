import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";

const FormularioCadastro = ({ onSubmit, validateCPF }) => {
	const [etapaAtual, setEtapa] = useState(0);
	const [dadosColetados, setDados] = useState({});
	const updateForm = useEffect(() => {
		if (etapaAtual === formularios.length - 1) {
			onSubmit(dadosColetados);
		}
	});

	const coletarDados = (dados) => {
		setDados({ ...dadosColetados, ...dados });

		proximaEtapa();
	};
	const proximaEtapa = () => {
		setEtapa(etapaAtual + 1);
	};

	const formularios = [
		<DadosUsuario aoEnviar={coletarDados} />,
		<DadosPessoais
			aoEnviar={coletarDados}
			validateCPF={validateCPF}
		/>,
		<DadosEntrega aoSubmeter={coletarDados} />,
		<Typography variant="h5">Cadastro concluído com sucesso!</Typography>,
	];

	return (
		<>
			<Stepper activeStep={etapaAtual}>
				<Step>
					<StepLabel>Dados de login</StepLabel>
				</Step>
				<Step>
					<StepLabel>Informações pessoais</StepLabel>
				</Step>
				<Step>
					<StepLabel>Dados de entrega</StepLabel>
				</Step>
				<Step>
					<StepLabel>Prontinho!</StepLabel>
				</Step>
			</Stepper>
			{formularios[etapaAtual]}
		</>
	);
};

export default FormularioCadastro;

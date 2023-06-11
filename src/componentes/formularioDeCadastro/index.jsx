import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { useState } from "react";

const FormularioCadastro = ({ onSubmit, validateCPF }) => {
	const [etapaAtual, setEtapa] = useState(0);

	const proximaEtapa = () => {
		setEtapa(etapaAtual + 1);
	};

	const formularios = [
		<DadosUsuario aoEnviar={proximaEtapa} />,
		<DadosPessoais
			aoEnviar={proximaEtapa}
			validateCPF={validateCPF}
		/>,
		<DadosEntrega aoSubmeter={onSubmit} />,
	];

	return <>{formularios[etapaAtual]}</>;
};

export default FormularioCadastro;

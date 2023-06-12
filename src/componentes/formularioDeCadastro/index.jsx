import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { useState, useEffect } from "react";

const FormularioCadastro = ({ onSubmit, validateCPF }) => {
	const [etapaAtual, setEtapa] = useState(0);
	const [dadosColetados, setDados] = useState({});
	const updateForm = useEffect(() => {
		console.log(dadosColetados);
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
	];

	return <>{formularios[etapaAtual]}</>;
};

export default FormularioCadastro;

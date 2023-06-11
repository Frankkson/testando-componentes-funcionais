import { Typography } from "@mui/material";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { useState } from "react";

const FormularioCadastro = ({ onSubmit, validateCPF }) => {
	const [etapaAtual] = useState(1);

	const formularioAtual = (etapa) => {
		switch (etapa) {
			default:
				return <Typography>Erro ao selecionar formulário</Typography>;
			case 0:
				return <DadosUsuario />;
			case 1:
				return (
					<DadosPessoais
						onSubmit={onSubmit}
						validateCPF={validateCPF}
					/>
				);
			case 2:
				return <DadosEntrega />;
		}
	};

	return <>{formularioAtual(etapaAtual)}</>;
};

export default FormularioCadastro;

import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

const FormularioCadastro = ({ onSubmit, validateCPF }) => {
	return (
		<>
			<DadosPessoais
				onSubmit={onSubmit}
				validateCPF={validateCPF}
			/>
			<DadosUsuario />
			<DadosEntrega />
		</>
	);
};

export default FormularioCadastro;

import "./App.css";
import FormularioCadastro from "./componentes/formularioDeCadastro";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";

function App() {
	return (
		<Container
			component="article"
			maxWidth="sm">
			<Typography
				align="center"
				variant="h3"
				component={"h1"}>
				This is a Typography inside a Container
			</Typography>

			<FormularioCadastro
				onSubmit={onSubmitForm}
				validateCPF={validateCPF}
			/>
		</Container>
	);
}
const onSubmitForm = (dados) => {
	console.log(dados);
};

const validateCPF = (CPF) => {
	if (CPF.length !== 11) {
		return { valido: false, text: "CPF deve ter 11 dígitos" };
	} else {
		return { isValid: true, text: "" };
	}
};

export default App;


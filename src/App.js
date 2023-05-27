import "./App.css";
import FormularioCadastro from "./componentes/formularioDeCadastro";
import { Container } from "@mui/material";

function App() {
	return (
		<Container
			component="article"
			maxWidth="sm"
		>
			<h1>This is a header inside a div</h1>

			<FormularioCadastro />
		</Container>
	);
}

export default App;


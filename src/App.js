import "./App.css";
import FormularioCadastro from "./componentes/formularioDeCadastro";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";

function App() {
	return (
		<Container
			component="article"
			maxWidth="sm"
		>
			<Typography
				align="center"
				variant="h3"
				component={"h1"}
			>
				This is a Typography inside a Container
			</Typography>

			<FormularioCadastro onSubmit={onSubmitForm} />
		</Container>
	);
}
const onSubmitForm = (dados) => {
	console.log(dados);
};
export default App;


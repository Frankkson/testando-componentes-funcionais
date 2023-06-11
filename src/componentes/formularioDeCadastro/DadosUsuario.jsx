import { TextField, Button } from "@mui/material";
import React from "react";

const DadosUsuario = ({ aoEnviar }) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				aoEnviar();
			}}
		>
			<TextField
				fullWidth
				id="email"
				label="email"
				margin="normal"
				required
				type="email"
				variant="outlined"
			></TextField>
			<TextField
				fullWidth
				id="senha"
				label="senha"
				margin="normal"
				required
				type="password"
				variant="outlined"
			></TextField>
			<Button
				color="primary"
				type="submit"
				variant="contained"
			>
				Cadastrar
			</Button>
		</form>
	);
};

export default DadosUsuario;

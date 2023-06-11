import { TextField, Button } from "@mui/material";
import React from "react";

const DadosUsuario = () => {
	return (
		<form>
			<TextField
				fullWidth
				id="email"
				label="email"
				margin="normal"
				type="email"
				variant="outlined"
			></TextField>
			<TextField
				fullWidth
				id="senha"
				label="senha"
				type="password"
				variant="outlined"
				margin="normal"
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

import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

const DadosUsuario = ({ aoEnviar }) => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				aoEnviar({ email, senha });
			}}>
			<TextField
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				fullWidth
				id="email"
				label="email"
				margin="normal"
				required
				type="email"
				variant="outlined"></TextField>
			<TextField
				value={senha}
				onChange={(e) => {
					setSenha(e.target.value);
				}}
				fullWidth
				id="senha"
				label="senha"
				margin="normal"
				required
				type="password"
				variant="outlined"></TextField>
			<Button
				color="primary"
				type="submit"
				variant="contained">
				Próximo
			</Button>
		</form>
	);
};

export default DadosUsuario;

import React from "react";
import { TextField, Button } from "@mui/material";

const DadosEntrega = ({ aoSubmeter }) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				aoSubmeter();
			}}
		>
			<TextField
				id="CEP"
				label="CEP"
				margin="normal"
				required
				type="number"
				variant="outlined"
			></TextField>
			<TextField
				fullWidth
				id="endereco"
				label="Endereço"
				margin="normal"
				required
				type="text"
				variant="outlined"
			></TextField>
			<TextField
				id="numero"
				label="Número"
				margin="normal"
				required
				type="number"
				variant="outlined"
			></TextField>
			<TextField
				id="cidade"
				label="Cidade"
				margin="normal"
				required
				type="text"
				variant="outlined"
			></TextField>
			<TextField
				id="estado"
				label="Estado"
				margin="normal"
				required
				type="text"
				variant="outlined"
			></TextField>
			<Button
				fullWidth
				color="primary"
				type="submit"
				variant="contained"
			>
				Finalizar cadastro
			</Button>
		</form>
	);
};

export default DadosEntrega;

import React from "react";
import { TextField, Button } from "@mui/material";

const DadosEntrega = () => {
	return (
		<form>
			<TextField
				id="CEP"
				label="CEP"
				margin="normal"
				type="number"
				variant="outlined"
			></TextField>
			<TextField
				fullWidth
				id="endereco"
				label="Endereço"
				margin="normal"
				type="text"
				variant="outlined"
			></TextField>
			<TextField
				id="numero"
				label="Número"
				margin="normal"
				type="number"
				variant="outlined"
			></TextField>
			<TextField
				id="cidade"
				label="Cidade"
				margin="normal"
				type="text"
				variant="outlined"
			></TextField>
			<TextField
				id="estado"
				label="Estado"
				margin="normal"
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

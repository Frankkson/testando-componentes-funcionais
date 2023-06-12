import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const DadosEntrega = ({ aoSubmeter }) => {
	const [CEP, setCEP] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				aoSubmeter({ CEP, endereco, numero, cidade, estado });
			}}
		>
			<TextField
				value={CEP}
				onChange={(e) => {
					setCEP(e.target.value);
				}}
				id="CEP"
				label="CEP"
				margin="normal"
				required
				type="number"
				variant="outlined"
			></TextField>
			<TextField
				value={endereco}
				onChange={(e) => {
					setEndereco(e.target.value);
				}}
				fullWidth
				id="endereco"
				label="Endereço"
				margin="normal"
				required
				type="text"
				variant="outlined"
			></TextField>
			<TextField
				value={numero}
				onChange={(e) => {
					setNumero(e.target.value);
				}}
				id="numero"
				label="Número"
				margin="normal"
				required
				type="number"
				variant="outlined"
			></TextField>
			<TextField
				value={cidade}
				onChange={(e) => {
					setCidade(e.target.value);
				}}
				id="cidade"
				label="Cidade"
				margin="normal"
				required
				type="text"
				variant="outlined"
			></TextField>
			<TextField
				value={estado}
				onChange={(e) => {
					setEstado(e.target.value);
				}}
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

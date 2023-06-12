import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

const DadosPessoais = ({ aoEnviar, validateCPF }) => {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [CPF, setCPF] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [termosDeUso, setTermosDeUso] = useState(false);
	const [error, setError] = useState({ CPF: { isValid: true, text: "" } });

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				aoEnviar({ nome, sobrenome, CPF, promocoes, termosDeUso });
			}}>
			<TextField
				fullWidth
				id="nome"
				label="Nome"
				margin="normal"
				onChange={(e) => {
					setNome(e.target.value);
				}}
				required
				value={nome}
			/>

			<TextField
				fullWidth
				id="sobrenome"
				label="Sobrenome"
				margin="normal"
				onChange={(e) => {
					setSobrenome(e.target.value);
				}}
				required
				value={sobrenome}
			/>

			<TextField
				error={!error.CPF.isValid}
				fullWidth
				helperText={error.CPF.text}
				id="CPF"
				label="CPF"
				margin="normal"
				onBlur={(e) => {
					const isValid = validateCPF(e.target.value);
					setError({ CPF: isValid });
				}}
				onChange={(e) => {
					setCPF(e.target.value);
				}}
				required
				value={CPF}
			/>

			<FormControlLabel
				label="Promoções"
				control={
					<Switch
						color="primary"
						onChange={(e) => {
							setPromocoes(e.target.checked);
						}}
						checked={promocoes}
						name="Promocoes"
					/>
				}
			/>

			<FormControlLabel
				label="Termos de uso"
				control={
					<Switch
						color="primary"
						name="Termos de uso"
						onChange={(e) => {
							setTermosDeUso(e.target.checked);
						}}
						checked={termosDeUso}
					/>
				}
			/>

			<Button
				type="submit"
				variant="contained"
				color="primary">
				Próximo
			</Button>
		</form>
	);
};

export default DadosPessoais;

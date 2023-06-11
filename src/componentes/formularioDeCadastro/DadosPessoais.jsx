import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

const DadosPessoais = ({ onSubmit, validateCPF }) => {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [CPF, setCPF] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [termosDeUso, setTermosDeUso] = useState(false);
	const [error, setError] = useState({ CPF: { isValid: true, text: "" } });

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit({ nome, sobrenome, CPF, promocoes, termosDeUso });
			}}
		>
			<TextField
				id="nome"
				label="Nome"
				margin="normal"
				value={nome}
				onChange={(event) => {
					setNome(event.target.value);
				}}
				fullWidth
			/>

			<TextField
				id="sobrenome"
				label="Sobrenome"
				margin="normal"
				value={sobrenome}
				onChange={(event) => {
					setSobrenome(event.target.value);
				}}
				fullWidth
			/>

			<TextField
				error={!error.CPF.isValid}
				helperText={error.CPF.text}
				id="CPF"
				label="CPF"
				margin="normal"
				onBlur={(event) => {
					const isValid = validateCPF(event.target.value);
					setError({ CPF: isValid });
				}}
				onChange={(event) => {
					setCPF(event.target.value);
				}}
				value={CPF}
				fullWidth
			/>

			<FormControlLabel
				label="Promoções"
				control={
					<Switch
						color="primary"
						onChange={(event) => {
							setPromocoes(event.target.checked);
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
						onChange={(event) => {
							setTermosDeUso(event.target.checked);
						}}
						checked={termosDeUso}
					/>
				}
			/>

			<Button
				type="submit"
				variant="contained"
				color="primary"
			>
				Cadastrar
			</Button>
		</form>
	);
};

export default DadosPessoais;

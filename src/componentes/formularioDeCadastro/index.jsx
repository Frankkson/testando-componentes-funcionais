import React from 'react';
import {Button, TextField} from "@mui/material"

const FormularioCadastro = () => {
    return (
        <form>
            <TextField
            id='nome'
            label='Nome'
            fullWidth/>

            <TextField
            id='sobrenome'
            label='Sobrenome'
            fullWidth/>

            <TextField
            id='CPF'
            label='CPF'
            fullWidth/>

            <TextField
            id='promocoes'
            label='Promoções'
            type='checkbox'/>   

            <TextField
            id='termosDeUso'
            label='Termos de uso'
            type='checkbox'/>  

            <Button type='submit'variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro
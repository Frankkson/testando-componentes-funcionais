import React from 'react';
import {Button, TextField} from "@mui/material"

const FormularioCadastro = () => {
    return (
        <form>
            <TextField
            id='nome'
            label='Nome'
            margin='normal'
            fullWidth/>

            <TextField
            id='sobrenome'
            label='Sobrenome'
            margin='normal'            
            fullWidth/>

            <TextField
            id='CPF'
            label='CPF'
            margin='normal'

            fullWidth/>

            <TextField
            id='promocoes'
            label='Promoções'
            margin='normal'
            type='checkbox'/>   

            <TextField
            id='termosDeUso'
            label='Termos de uso'
            margin='normal'
            type='checkbox'/>  

            <Button type='submit'variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro
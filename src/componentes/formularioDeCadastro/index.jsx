import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@mui/material"

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

            <FormControlLabel label='Promoções' control={<Switch 
            color='primary' 
            defaultChecked
            name='Promocoes'/>}/>

            <FormControlLabel label='Termos de uso' control={<Switch 
            color='primary'
            name='Termos de uso' />} />            
          

            <Button type='submit'variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro
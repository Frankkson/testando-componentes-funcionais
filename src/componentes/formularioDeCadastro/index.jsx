import React from 'react';
import {Button} from "@mui/material"

const FormularioCadastro = () => {
    return (
        <form>
            <label>Nome</label>
            <input type='text'/>

            <label>Sobrenome</label>
            <input type='text'/>

            <label>CPF</label>
            <input type='text'/>

            <label>Promoções</label>
            <input type='checkbox'/>

            <label>Termos de uso</label>
            <input type='checkbox'/>

            <Button type='submit'variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro
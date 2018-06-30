import React, { Component } from 'react';


const NovoCliente = () => {
    return (
        <div>
            <h1>Novo Cliente</h1>
            <h5>mensagem de criação !</h5>
            <form>
                <input type="text" placeholder="nome"/>
                <button>Criar</button>
            </form>
        </div>
    )
};
export default NovoCliente;


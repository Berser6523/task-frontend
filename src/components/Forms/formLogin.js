import React from 'react';
import { Form,Field, ErrorMessage } from 'formik'


function formLogin({ state }) {

    
    return (
        <Form>
            <div className="container-form">
                <Field type="text" name="email" placeholder="E-mail" />   
                <ErrorMessage component="span" name="email" /> 
            </div>   

            <div className="container-form">
                <Field type="password" name="password" placeholder="Senha"/>
                <ErrorMessage component="span" name="password" /> 
            </div>
            
            <div className="btn">
                <button type="submit">Login</button>
            </div>

            <span className="loading">{ state.loading ? "Carregando...":"" }</span>
            <span className="error">{ state.error ? "Email ou Senha Invalido":"" }</span>
        </Form>
    );
}




export default formLogin
import React from 'react';
import { Form,Field, ErrorMessage } from 'formik'


function FormProject({ idUpdate }) {
    return (
        <Form>
            <div className="container-form">
                <Field type="text" name="title" placeholder="Titulo" />   
                <ErrorMessage component="span" name="title" /> 
            </div>   

            <div className="container-form">
                <Field type="text" name="description" placeholder="Descrição"/>
                <ErrorMessage component="span" name="description" /> 
            </div>
            
            <div className="btn">
                <button type="submit">{ idUpdate ? "Editar": "Adicionar" }</button>
            </div>

        </Form>
    );
}




export default FormProject
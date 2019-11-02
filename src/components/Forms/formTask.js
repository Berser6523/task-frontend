import React, { useState, useEffect } from 'react';
import { Form, Field, ErrorMessage } from 'formik'
import Select from 'react-select'

import { setValueSelect } from '../../helper'
import { api } from '../../services/api'

const customStylesCliente = {  
    placeholder:(provided) => ({
        ...provided,
        fontSize: "14px",
        fontWeight: 500,
    }),
}

function FormTask({ setUserId, setProjectId }){

    const [name, setName] = useState('select_id')
    const [users, setUsers] = useState([])
    const [projects, setProjects] = useState([])
    

    useEffect(() => {
        async function load(){
            const responseUser = await api.get('/users') 
            const responseProjects = await api.get('/list')

            let configUser = ['_id', 'name']
            let configProjects = ['_id', 'title']

            let users = setValueSelect(configUser, responseUser.data)
            let projects = setValueSelect(configProjects, responseProjects.data)

            setUsers(users)
            setProjects(projects)
            
        }
        load()
    },[])

    function handleInputChangeUser(selectName,selectedOption){
        setUserId(selectName.value)
    }

    function handleInputChangeProject(selectName,selectedOption){
        setProjectId(selectName.value)
    }


    return (
        <Form>
            <div className="container-form">
                <Field type="text" name="title" placeholder="Titulo" />   
                <ErrorMessage component="span" name="title" /> 
            </div> 
                
            <div className="container-form">
                <Field type="text" name="description" placeholder="Descrição" />   
                <ErrorMessage component="span" name="description" />
            </div>   

            <div className="container-form">
                <Select
                    options={users}
                    onChange={handleInputChangeUser}
                    defaultValue={{ label: 'Usuários', value: 'Usuários' }}
                    styles={customStylesCliente}
                    classNamePrefix="react-select"
                    />
            </div>
            
            <div className="container-form">
                <Select
                    options={projects}
                    onChange={handleInputChangeProject}
                    defaultValue={{ label: 'Tarefas', value: 'Tarefas' }}
                    styles={customStylesCliente}
                    classNamePrefix="react-select"
                    />
            </div>
            
            <div className="btn">
                <button type="submit">Adicionar</button>
            </div>

        </Form>
    )
}

export default FormTask
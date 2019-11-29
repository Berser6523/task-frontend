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

function FormTask({ setUserId, setProjectId, setTaskId, modal }){

    const [users, setUsers] = useState([])
    const [projects, setProjects] = useState([])
    const [userValue, setUserValue] = useState({ label: 'Usuário', value: 'Usuário' })
    const [userProject, setProjectValue] = useState({ label: 'Projeto', value: 'Projeto' })
    const editTask = modal.project ? { user_id: modal.project.user, project_id: modal.project._id } : ''

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
            

            if(modal.acao === 'editar'){
                let userEdit = users.find(user => user.value === editTask.user_id)
                let projectEdit = projects.find(project => project.value === editTask.project_id)

                setUserValue(userEdit)
                setProjectValue(projectEdit)

                setUserId(userEdit.value)
                setProjectId(projectEdit.value)
                setTaskId(modal._id)
            }else{
                
                setUserValue({ label: 'Usuário', value: 'Usuário' })
                setProjectValue({ label: 'Projeto', value: 'Projeto' })
            }

            
        }
        load()
    },[modal, editTask.user_id, editTask.project_id, setProjectId, setTaskId, setUserId])

    function handleInputChangeUser(selectName,selectedOption){
        setUserValue(selectName)
        setUserId(selectName.value)
    }

    function handleInputChangeProject(selectName,selectedOption){
        setProjectValue(selectName)
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
                    value={userValue}
                    options={users}
                    onChange={handleInputChangeUser}
                    styles={customStylesCliente}
                    classNamePrefix="react-select"
                    />
            </div>
            
            <div className="container-form">
                <Select
                    value={userProject}
                    options={projects}
                    onChange={handleInputChangeProject}
                    styles={customStylesCliente}
                    classNamePrefix="react-select"
                    />
            </div>
            
            <div className="btn">
                <button type="submit">{modal.acao === 'editar' ? "Editar" : "Adicionar"}</button>
            </div>

        </Form>
    )
}

export default FormTask
import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { formatDate } from '../../helper'

import { requestProjects, deleteProject } from '../../store/actions/projects'
import { toggleModalProjct, editarModal } from '../../store/actions/modal'


function Card(props) {
    
    const { projects, requestProjects, toggleModalProjct, editarModal, deleteProject } = props

    


    useEffect(() => {
        requestProjects()
    },[requestProjects])


    function toggleModal(){
        toggleModalProjct(true, 'adicionar')
    }

    function updateProject(e, project){
        if(!e.target.classList.value.includes('pe-7s-close')){
            const { _id, description, title } = project

            const dateProject = {
                _id,
                description,
                title
            }

            editarModal(dateProject, true, 'editar')
        }        
    }

    function deletaProjeto(id){
        if(window.confirm("Deseja Deletar Este projeto")){
            deleteProject(id)
        }
    }

    return (

        <>
        <div className="title-create">
            <h2>Projetos</h2>
            <button onClick={toggleModal} className="btn-block btn btn-default">Adicionar</button>
        </div>
        <div className="container-card-projects" >
            {   
                projects.map(project => (
                    <div key={project._id} onClick={(e) => updateProject(e,project)} className="card-projects" title={`Criado por ${project.user.name}`}>
                        <div className="delete-card-project" onClick={() => deletaProjeto(project._id)}>
                            <i className="pe-7s-close"></i>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <span>{formatDate(project.creatdAt)}</span>
                    </div>
                )) 
            }
        </div>
        </>
    );
}


const mapStateToProps = state => ({
    projects: state.projects.projects,
    modal: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators( {requestProjects, toggleModalProjct, editarModal, deleteProject } , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card)
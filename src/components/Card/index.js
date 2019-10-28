import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { formatDate } from '../../helper'

import { requestProjects } from '../../store/actions/projects'
import { modalProjct } from '../../store/actions/modal'


function Card(props) {
    
    const { projects, requestProjects, modalProjct } = props

    useEffect(() => {
        requestProjects()
    },[])


    function openModal(){
        modalProjct(true)
    }

    return (
        <div className="container-card-projects" >
            <div className="title-create">
                <h2>Projetos</h2>
                <button onClick={openModal} className="btn-block btn btn-default">Adicionar</button>
            </div>
            {   
                projects.map(project => (
                    <div key={project._id} className="card-projects" title={`Criado por ${project.user.name}`}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <span>{formatDate(project.creatdAt)}</span>
                    </div>
                )) 
            }
        </div>
    );
}


const mapStateToProps = state => ({
    projects: state.projects.projects,
    
});

const mapDispatchToProps = dispatch =>
  bindActionCreators( {requestProjects, modalProjct } , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card)
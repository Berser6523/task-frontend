import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleModalTask, editModalTask } from '../../store/actions/modal'
import { requestTask } from '../../store/actions/tasks'
import { formatDate } from '../../helper/index'
 
function CarTask(props) {    
    const { toggleModalTask , requestTask, tasks, editModalTask } = props

    useEffect(() =>{
        requestTask()
        
    },[requestTask])

    function openModal(){
        toggleModalTask(true,'adicionar')
        
    }

    function editask(task){
        editModalTask(task, true,'editar')
    }

    return (
        <>
            <div className="card-personalizado">
                <div className="title-create">
                    <h2>Tarefas</h2>
                    <button onClick={openModal} className="btn-block btn btn-default">Adicionar</button>
                </div>

                <div className="container-card-projects">
                    {
                        tasks.map(task => (
                            <div key={task._id} className="card-projects" onClick={() => editask(task)}>
                                <div className="delete-card-project">
                                    <i className="pe-7s-close"></i>
                                </div>
                                <h3>Projeto</h3>
                                <span>{task.project.title}</span>

                                <h3>{task.title}</h3>
                                <span>{task.description}</span>

                                <p>{formatDate(task.creatdAt)}</p>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleModalTask, requestTask, editModalTask }, dispatch);


const mapStateToProps = state => ({
    tasks: state.tasks.tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(CarTask)
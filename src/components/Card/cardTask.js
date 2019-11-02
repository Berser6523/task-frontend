import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleModalTask  } from '../../store/actions/modal'
import { requestTask } from '../../store/actions/tasks'
 
function CarTask({ toggleModalTask , requestTask}) {    

    function openModal(){
        toggleModalTask(true)
    }

    useEffect(() =>{
        requestTask()
    },[requestTask])

    return (
        <>
            <div className="card-personalizado">
                <div className="title-create">
                    <h2>Tarefas</h2>
                    <button onClick={openModal} className="btn-block btn btn-default">Adicionar</button>
                </div>

                <div className="container-card-projects">
                    <div className="card-projects" title="Criado por undefined">
                        <div className="delete-card-project">
                            <i className="pe-7s-close"></i>
                        </div>
                        <h3>Projeto</h3>
                        <p>teste add</p>
                        <span>29.10.2019</span>
                    </div>
                </div>
                
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleModalTask, requestTask }, dispatch);



export default connect(null, mapDispatchToProps)(CarTask)
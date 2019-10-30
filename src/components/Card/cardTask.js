import React from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { openModalTask } from '../../store/actions/tasks'


function CarTask({ openModalTask }) {

    function openModal(){
        openModalTask(true)
    }

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
  bindActionCreators({ openModalTask }, dispatch);


const mapStateToProps = state => ({
  modal: state.modalTask.modal_tasks
});  

export default connect(mapStateToProps, mapDispatchToProps)(CarTask)
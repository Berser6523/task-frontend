import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleModalTask } from '../../store/actions/modal'

function ModalTask({ modal, toggleModalTask }){

    function closeModal(e){
        if(e.target.classList.value.includes('active')){
            toggleModalTask(false)
        }
    }

    return (
        <div onClick={closeModal} className={ modal ? "container-modal-project active": "container-modal-project" }>
            <div className="card-modal-project">
                <h1>Adicionar Tarefa</h1>  
                <form>
                    <div className="container-form">
                        <input type="text" name="title" placeholder="Titulo" />   
                    </div> 
                      
                    <div className="container-form">
                        <input type="text" name="description" placeholder="Descrição" />   
                    </div>   

                    <div className="container-form">
                        <input type="text" name="description" placeholder="Quem vai Fazer"/>
                    </div>
                    
                    <div className="btn">
                        <button type="submit">Adicionar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}



const mapStateToProps = state => ({
  modal: state.modal.modal_tasks
});  

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleModalTask }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalTask)
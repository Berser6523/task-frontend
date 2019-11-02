import React, { useEffect, useState } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Formik } from 'formik'



import { toggleModalTask } from '../../store/actions/modal'
import { requestAddTask } from '../../store/actions/tasks'

import FormTask from '../../components/Forms/formTask'
import * as Yup from 'yup'

const validation = Yup.object().shape({
    title: Yup.string().required('Campo obrigatorio'),
    description: Yup.string().required('Descrição é Campo Obrigatório'),
})


function ModalTask({ modal, toggleModalTask, requestAddTask }){

    const [userId, setUserId] = useState('') 
    const [projectId, setProjectId] = useState('') 
    

    

    function closeModal(e){
        if(e.target.classList.value.includes('active')){
            toggleModalTask(false)
        }
    }

    let initialState = {
        title:  "",
        description: "",
    }


    return (
        <div onClick={closeModal} className={ modal ? "container-modal-project taks active ": "container-modal-project taks" }>
            <div className="card-modal-project">
                <h1>Adicionar Tarefa</h1>  
                <Formik
                        enableReinitialize
                        initialValues={initialState}
                        onSubmit={(value, actions) => {
                            
                            if(userId){
                                requestAddTask({ ...value,  userId, projectId})
                            }
                            
                            // actions.resetForm(initialState)
                            actions.setSubmitting(false);
                        }}

                        render={props => <FormTask { ...props } setUserId={setUserId} setProjectId={setProjectId} />}

                        validationSchema={validation}>   
                    
                    </Formik>
            </div>
        </div>
    )
}



const mapStateToProps = state => ({
  modal: state.modal.modal_tasks
});  

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleModalTask, requestAddTask }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalTask)
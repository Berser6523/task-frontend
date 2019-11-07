import React, { useState } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Formik } from 'formik'



import { toggleModalTask } from '../../store/actions/modal'
import { requestAddTask, requestEdiTask } from '../../store/actions/tasks'

import FormTask from '../../components/Forms/formTask'
import * as Yup from 'yup'

const validation = Yup.object().shape({
    title: Yup.string().required('Campo obrigatorio'),
    description: Yup.string().required('Descrição é Campo Obrigatório'),
})


function ModalTask(props){
    const { modal, toggleModalTask, requestAddTask, requestEdiTask } = props

    const [userId, setUserId] = useState('') 
    const [projectId, setProjectId] = useState('') 
    const [taskId, setTaskId] = useState('') 
    

    function toggleModal(e){
        if(e.target.classList.value.includes('active')){
            toggleModalTask(false,'')
        }
    }

    let initialState = {
        title:  modal.title ? modal.title : "",
        description: modal.description ? modal.description : "",
    }


    return (
        <div onClick={toggleModal} className={ modal.modal ? "container-modal-project taks active ": "container-modal-project taks" }>
            <div className="card-modal-project">
                <h1>Adicionar Tarefa</h1>  
                <Formik
                        enableReinitialize
                        initialValues={initialState}
                        onSubmit={(value, actions) => {

                            if(modal._id){
                                requestEdiTask({ ...value,  assignedTo: userId, project: projectId, _id: taskId})
                            }else{
                                requestAddTask({ ...value,  userId, projectId})
                            }

                            actions.resetForm(initialState)
                            actions.setSubmitting(false);
                            
                        }}

                        render={props =>
                            <FormTask
                                { ...props }
                                setUserId={setUserId}
                                setProjectId={setProjectId}
                                setTaskId={setTaskId}
                                modal={modal}
                                />
                            }

                        validationSchema={validation}>   
                    
                    </Formik>
            </div>
        </div>
    )
}



const mapStateToProps = state => ({
  modal: state.modal.modal_tasks,
});  

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleModalTask, requestAddTask, requestEdiTask }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalTask)
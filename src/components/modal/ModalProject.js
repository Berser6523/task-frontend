import React from 'react'
import FormProject from '../../components/Forms/formProject'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { addProjeto, editProjeto } from '../../store/actions/projects'
import { closeModalProjct  } from '../../store/actions/modal'

const validation = Yup.object().shape({
    title: Yup.string().required('Campo obrigatorio'),
    description: Yup.string().required('Descrição é Campo Obrigatório')
})

function ModalProject({ addProjeto, openModal, closeModalProjct, editModal, editProjeto }){

    let idUpdate = editModal._id ? editModal._id : ""


    let initialState = {
        title: editModal.title ? editModal.title : "",
        description: editModal.description ? editModal.description : "",
    }


    function closeModal(e){
        if(e.target.classList.value.includes('active')){
            closeModalProjct(false)
        }
    }

    return (
        <div onClick={closeModal} className={ openModal ? "container-modal-project active": "container-modal-project" }>
            <div className="card-modal-project">
                <h1>{idUpdate ? "Editar Projeto": "Adicionar Projeto"} </h1>  
                <Formik
                        enableReinitialize
                        initialValues={initialState}
                        onSubmit={(value, actions) => {
                            if(idUpdate){
                                editProjeto({...value, _id: idUpdate})
                                initialState = {...value}
                            }else{
                                addProjeto(value)
                            }
                            

                            actions.resetForm(initialState)
                            actions.setSubmitting(false);
                        }}

                        render={props => <FormProject { ...props } idUpdate={idUpdate} />}

                        validationSchema={validation}>   
                    
                    </Formik>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addProjeto, closeModalProjct, editProjeto }, dispatch);

const mapStateToProps = state => ({
  editModal: state.modal.editProject
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalProject)
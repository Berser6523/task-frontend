import React from 'react'
import FormProject from '../../components/Forms/formProject'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { addProjeto, editProjeto } from '../../store/actions/projects'
import { toggleModalProjct  } from '../../store/actions/modal'

const validation = Yup.object().shape({
    title: Yup.string().required('Campo obrigatorio'),
    description: Yup.string().required('Descrição é Campo Obrigatório')
})

function ModalProject(props){    

    const { addProjeto, toggleModalProjct, modal, editProjeto } = props

    let idUpdate = modal._id ? modal._id : ""


    let initialState = {
        title: modal.title ? modal.title : "",
        description: modal.description ? modal.description : "",
    }


    function toggleModal(e){
        if(e.target.classList.value.includes('active')){
            toggleModalProjct(false, '')
        }
    }

    return (
        <div onClick={toggleModal} className={ modal.modal ? "container-modal-project active": "container-modal-project" }>
            <div className="card-modal-project">
                <h1>{modal.acao === 'editar'? "Editar Projeto": "Adicionar Projeto"} </h1>  
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
  bindActionCreators({ addProjeto, toggleModalProjct, editProjeto }, dispatch);

const mapStateToProps = state => ({
  modal: state.modal.modal_project
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalProject)
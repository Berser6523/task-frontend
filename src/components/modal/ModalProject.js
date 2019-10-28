import React from 'react'
import FormProject from '../../components/Forms/formProject'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { addProjeto } from '../../store/actions/projects'
import { modalProjct  } from '../../store/actions/modal'

const validation = Yup.object().shape({
    title: Yup.string().required('Campo obrigatorio'),
    description: Yup.string().required('Descrição é Campo Obrigatório')
})

function ModalProject({ addProjeto, modal, modalProjct }){
    
    let initialState = {
        title: '',
        description: '',
    }

    function closeModal(e){
        if(e.target.classList.value.includes('active')){
            modalProjct(false)
        }
    }


    return (
        <div onClick={closeModal} className={ modal ? "container-modal-project active": "container-modal-project" }>
            <div className="card-modal-project">
                <h1>Adicionar Projeto</h1>  
                <Formik
                        initialValues={initialState}
                        onSubmit={(value, actions) => {
                            addProjeto(value)
                            actions.resetForm(initialState)
                            actions.setSubmitting(false);
                        }}

                        render={props => <FormProject { ...props }  />}

                        validationSchema={validation}>   
                    
                    </Formik>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addProjeto, modalProjct }, dispatch);


export default connect(null, mapDispatchToProps)(ModalProject)
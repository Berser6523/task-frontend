import React from 'react'
import FormProject from '../../components/Forms/formProject'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { addProjeto } from '../../store/actions/projects'
 

const validation = Yup.object().shape({
    title: Yup.string().required('Campo obrigatorio'),
    description: Yup.string().required('Descrição é Campo Obrigatório')
})

function ModalProject({ addProjeto, modal }){
    
    

    return (
        <div className={ modal ? "container-modal-project active": "container-modal-project" }>
            <div className="card-modal-project">
                <h1>Adicionar Projeto</h1>  
                <Formik
                        initialValues={
                            {
                                title: '',
                                description: '',
                            }
                        }
                        onSubmit={(value, actions) => {
                            addProjeto(value)
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
  bindActionCreators({ addProjeto }, dispatch);

export default connect(null, mapDispatchToProps)(ModalProject)
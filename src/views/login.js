import React from 'react'
import FormLogin from '../components/Forms/formLogin'
import { Formik } from 'formik'
import * as Yup from 'yup'

/**
 * Redux 
 */
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'

/**
 * Actions
 */

import { auth } from '../store/actions/auth'

const validation = Yup.object().shape({
    email: Yup.string().email('Insira um E-mail válido').required('E-mail e um campo obrigatorio'),
    password: Yup.string().min(8, "A senha deve conter pelo menos 8 caracteres").required('Senha é um campo obrigatório')
})

function Login({ auth, state, history }) {

    if(state.authenticate){
        history.push('/projects')
    }

    return (
        <div className="login">
            <div className="container">
                <div className="container-login">
                    <h1>Task</h1>

                    <Formik
                        initialValues={
                            {
                                email: '',
                                password: '',
                            }
                        }
                        onSubmit={(value, actions) => {
                            auth({ ...value })
                            actions.setSubmitting(false);
                        }}

                        render={props => <FormLogin { ...props } state={ state } />}

                        validationSchema={validation}>   
                    
                    </Formik>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    state: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ auth }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
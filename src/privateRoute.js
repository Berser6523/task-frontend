import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux'


const PrivateRoute = ({component: Component, ...res}) => {
    
    return (
        <Route 
            {...res}
            render={
                props => 
                res.state.token ? 
                    (<Component {...props} />) : 
                    (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
            }
        />
    )
}



const mapStateToProps = state => ({
    state: state.auth
});

export default connect(mapStateToProps, null)(PrivateRoute)
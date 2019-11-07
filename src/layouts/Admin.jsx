/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react"

import { connect } from 'react-redux'

import { authenticate } from '../helper'

import Sidebar from "components/Sidebar/Sidebar"

import routes from "../default-routes.js"
import Routers from '../routers'
import ModalProject from '../components/modal/ModalProject'
import ModalTask from '../components/modal/modalTask'

import Image from "assets/img/sidebar-3.jpg"

function Admin(props){
    const [image]  = useState(Image)
    const [color]  = useState("black")
    const [hasImage]  = useState(true)
    
    const { token } = props

    authenticate(token)
    
    return (
        <>
            <div className="wrapper">
                <Sidebar {...props} routes={routes} image={image}  color={color} hasImage={hasImage}/>
                
                <div id="main-panel" className="main-panel" >
                    <div className="card-personalizado">
                        <Routers />
                    </div>
                </div>
            
            </div>


            <ModalProject />

            <ModalTask />
        </>
    )
}

const mapStateToProps = state => ({
    token: state.auth.token,
})

export default connect(mapStateToProps, null)(Admin)
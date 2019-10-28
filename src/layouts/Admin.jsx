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

import Image from "assets/img/sidebar-3.jpg"

function Admin(props){
    const [image, setImage]  = useState(Image)
    const [color, setColor]  = useState("black")
    const [hasImage, setHasImage]  = useState(true)
    
    const { token, modal } = props

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


            <ModalProject modal={modal}/>
        </>
    )
}

const mapStateToProps = state => ({
    token: state.auth.token,
    modal: state.modal.modal_project
})

export default connect(mapStateToProps, null)(Admin)
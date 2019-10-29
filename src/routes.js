import React from 'react'
import Login from "./views/login"
import PrivateRoute from './privateRoute'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from './layouts/Admin.jsx'


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/projects" component={Dashboard} />
            <PrivateRoute path="/tasks" component={Dashboard} />
        </Switch>
    </BrowserRouter>
)

export default Router

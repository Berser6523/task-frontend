import React from 'react';
import { Route } from 'react-router-dom'
import Card from '../components/Card'



export default function Routers() {
  return (
    <>
        <Route exact path="/dashboard" component={Card} />
        {/* <Route exact path="/dashboard/teste" component={() => (<h1>Olá</h1>)} /> */}
    </>
  );
}

import React from 'react';
import { Route } from 'react-router-dom'
import Card from '../components/Card'



export default function Routers() {
  return (
    <>
        <Route exact path="/projects" component={Card} />
        <Route exact path="/tasks" component={() => (<h1>Olá</h1>)} />
    </>
  );
}

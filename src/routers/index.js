import React from 'react';
import { Route } from 'react-router-dom'
import Card from '../components/Card'
import CardTask from '../components/Card/cardTask'



export default function Routers() {
  return (
    <>
        <Route exact path="/projects" component={Card} />
        <Route exact path="/tasks" component={CardTask} />
    </>
  );
}

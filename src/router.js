import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './screens/Login';
import ChurrasList from './screens/ChurrasList';
import Churras from './screens/Churras';

import Header from './components/Header';

const AppRouter = () => (
    <Switch>
        <Header/>
        <Route path="/login" exact component={Login}/>
        <Route path="/churraslist" exact component={ChurrasList}/>
        <Route path="/churras" exact component={Churras}/>
    </Switch>
);

export default AppRouter;
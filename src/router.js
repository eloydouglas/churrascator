import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './screens/Login';
import ChurrasList from './screens/ChurrasList';
import Churras from './screens/Churras';

import Header from './components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/churraslist" exact component={ChurrasList}/>
            <Route path="/churras" exact component={Churras}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
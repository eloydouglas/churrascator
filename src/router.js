import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './screens/Login';
import ChurrasList from './screens/ChurrasList';
import Churras from './screens/Churras';

import Header from './components/Header';
import Modal from './components/Modal';

const mapStateToProps = state => ({
    showModal: state.general.showModal
});

const AppRouter = ({showModal}) => (
    <BrowserRouter>
        {showModal && <Modal/>}
        <Header/>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/churraslist" exact component={ChurrasList}/>
            <Route path="/churras/:id" exact component={Churras}/>
        </Switch>
    </BrowserRouter>
);

export default connect(mapStateToProps, null)(AppRouter);
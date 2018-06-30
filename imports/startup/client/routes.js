import React from "react";
import { render } from 'react-dom';
import {
    Router,
    Route,
    Switch
  } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

import Loadmang from '../../ui/helper/loadmang';
import HEADER from '../../ui/layouts/Header';

const Dashboard = Loadmang(() => import('../../ui/components/dashboard/Dashboard'));
const Clientes = Loadmang(() => import('../../ui/components/clientes/Index'));
const NovoCliente = Loadmang(() => import('../../ui/components/clientes/novo'));
const NotFoundPage = Loadmang(() => import('../../ui/components/notfound/NotFoundPage'));

const browserHistory = createBrowserHistory();
const Routes = () => (
    <Router history={browserHistory}>
        <div>
            <HEADER/>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/clientes" component={Clientes} />
                <Route path="/clientes/criar" component={NovoCliente} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>      
);

Meteor.startup(() => {
    render(<Routes />, document.getElementById('render-target'));
});
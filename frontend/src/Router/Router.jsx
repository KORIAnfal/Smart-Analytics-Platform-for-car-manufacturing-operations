import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Machines from '../Pages/Machines_pages/machines';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/machines" component={Machines} />
                {/* Add other routes here */}
            </Switch>
        </Router>
    );
};

export default AppRouter;
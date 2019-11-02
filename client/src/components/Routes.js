import React from 'react';
import { Route, Switch } from "react-router-dom";

const Routes = ({ArrayRoute}) => {
    return (
        <Switch>
            {ArrayRoute.map(({ path, Component }) => (
                <Route key={path} exact path={path} component={Component} />            
            ))}
        </Switch>
    );
};

export default Routes;
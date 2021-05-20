import React from "react";
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ path, component: Component, restricted, ...rest }) {

    const login = true
    return (
        <Route path={path} {...rest} >
            {login ?
                <Component />
                : < Redirect to="/" />
            }

        </Route>
    )
}
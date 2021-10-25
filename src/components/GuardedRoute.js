import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function GuardedRoute({ component: Component, auth, naves, setNaveDetalle, ...rest }) {
    return (
        <Route {...rest} render={(props) => (
            auth === true
                ? <Component {...props} />
                : <Redirect to="/" />
        )}
        />
    )
}
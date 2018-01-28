import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Template'
import Profile from '../containers/Template'

const CreateRoutes = () => {
    return (
        <Route
            path='/'
            component={Template}
        >
            <IndexRoute
                component={Home}
            />
            <Route
                path='/profile'
                component={Profile}
            />
        </Route>
    )
}

const Routes = CreateRoutes ()

export default Routes

import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'

export default (CustomComponent) => class Translator extends React.Component{
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                   <Switch>
                        <Route path="/:location" component={() => <CustomComponent {...this.props} {...this.state}/>} />
                        <Redirect from="" to="en" />
                   </Switch>
               </div>
            </ConnectedRouter>
        )
    }
}
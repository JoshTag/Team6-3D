import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'

export class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PageOne /> 
                    <PageTwo /> 
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';

export class Main extends Component {
    render() {
        return (
            <BrowserRouter>

                <Switch>
                    {/* <PageOne />  */}
                    <PageTwo /> 
                    {/* <PageThree />  */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;

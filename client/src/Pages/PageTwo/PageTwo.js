import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Compone from '../../Components/compone'
import Comptwo from '../../Components/comptwo'
import Compthree from '../../Components/compthree'
import './PageTwo.scss'

export class PageTwo extends Component {
    render() {
        return (
            <div className="container">
                <div className="buttons">
                    <button className="buttons__click" onClick={this.displayOne}>
                        Top Ten Categories
                    </button>
                    <Compone /> 
                    
                    <button className="buttons__click" onClick={this.displayTwo}>
                        Genre of Film by Success rate /duration
                    </button>
                    <Comptwo /> 

                    <button className="buttons__click" onClick={this.displayThree}>
                        Average amount pledged for successful campaigns
                    </button>
                    <Compthree /> 
                </div>
            </div>
        )
    }
}

export default PageTwo;

import React, { Component } from 'react'
//import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Compone from '../../components/compone'
import Comptwo from '../../components/comptwo'
import Compthree from '../../components/compthree'
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
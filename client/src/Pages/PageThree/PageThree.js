import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Compthree from '../../Components/compthree'

const options = [
    'Average Amount of Pleges by successfull campaigns', 'Category 2', 'Category 3'
  ]

  
  export class PageThree extends Component {
      render() {
        return (
            <div>

            <div className="dropdown">
                <Dropdown options={options} onChange={this.onSelect} placeholder="Select a category" />
            </div>
                <Compthree /> 
            </div>
        )
    }
}

export default PageThree;

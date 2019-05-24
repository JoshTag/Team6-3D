import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    'Film', 'Category 2', 'Category 3'
  ]

  
  export class PageOne extends Component {
      onSelect = () => {
            console.log("hello")
        }
      render() {
        return (
            <div className="dropdown">
                <Dropdown options={options} onChange={this.onSelect} placeholder="Select a category" />
            </div>
        )
    }
}

export default PageOne;

import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Compone from '../../components/compone'

const options = [
    'Top Five 10 Categories', 'Category 2', 'Category 3'
  ]

  
  export class PageOne extends Component {
      onSelect = () => {
            console.log("hello")
        }
      render() {
        return (
            <div>
            
                <div className="dropdown">
                    <Dropdown options={options} onChange={this.onSelect} placeholder="Select a category" />
                </div>
                
                <Compone />

            </div>
        )
    }
}

export default PageOne;

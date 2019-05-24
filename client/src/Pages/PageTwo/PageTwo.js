import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
    '', 'Category 2', 'Category 3'
  ]

export class PageTwo extends Component {
    render() {
        return (
            <div>
                <Dropdown options={options} onChange={this._onSelect} placeholder="Select a category" />
            </div>
        )
    }
}

export default PageTwo;

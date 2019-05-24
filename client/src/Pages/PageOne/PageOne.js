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
            <div>
                {/* <iframe src="https://public.tableau.com/views/Brainstation3D-Kickstarter/GenreofFilmbySuccessRate?:showVizHome=n&:embed=true&:display_count=yes"
                width="600" height="300"></iframe> */}
            <div className="dropdown">
                <Dropdown options={options} onChange={this.onSelect} placeholder="Select a category" />
            </div>
            </div>
        )
    }
}

export default PageOne;

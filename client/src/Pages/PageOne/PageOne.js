import React, { Component } from 'react';
import 'react-dropdown/style.css';
import image from './image.png';
import './pageone.scss';
import '../Header/header.scss';
import { Link } from 'react-router-dom';

  export class PageOne extends Component {
      render() {
        return (
            <div className="pageone">
                <img className="image1" src={image} alt="image1"/>
                <div className="right">
                    <h2>Step 1</h2>
                    <p>Choose a category to explore the data</p>
                    <div className="buttongroup">
                        <button type="button"><Link to="/results">Film & Video</Link></button>
                        <button>Change</button>
                        <button>Change</button>
                        <button>Change</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default PageOne;

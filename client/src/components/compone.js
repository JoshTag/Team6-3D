import React, { Component } from 'react';
import './style.scss';

export class Compone extends Component {
    render() {
        return (
            <div>
                <div className="graph">
                    <iframe src="https://public.tableau.com/views/Brainstation3D-Kickstarter/GenreofFilmbySuccessRate?:showVizHome=n&:embed=true&:display_count=yes" width="618" height="811"></iframe>
                </div>
            </div>
        )
    }
}

export default Compone;

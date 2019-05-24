import React, { Component } from 'react';
import './style.scss';

export class Compone extends Component {
    render() {
        return (
            <div>
                <div className="graph">
                    <iframe src="https://public.tableau.com/views/TableauKickstarterfinal1/1_GenreofFilmbySuccessrate?:showVizHome=n:embed=y&:display_count=yes&publish=yes&:origin=viz_share_linke" width="1000" height="811"></iframe>
                </div>
            </div>
        )
    }
}

export default Compone;

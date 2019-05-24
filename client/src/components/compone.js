import React, { Component } from 'react';
import './style.scss';

export class Compone extends Component {
    render() {
        return (
            <div>
                <div className="graph">
                    <iframe src="https://public.tableau.com/views/TableauKickstarterFINAL1/Dashboard1?:showVizHome=n:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link" width="1000" height="811"></iframe>
                </div>
            </div>
        )
    }
}

export default Compone;

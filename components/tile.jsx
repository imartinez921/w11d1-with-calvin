import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.tile = 'T';
    }

    render () {
        return (
            <div>
                <p>{this.tile}</p>
            </div>
        )
    }
}

export default Tile;
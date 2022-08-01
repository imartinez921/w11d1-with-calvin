import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor() {
        super(props);
        this.board = new Minesweeper.Board();
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
        return (
            <div>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>    
        )
    }
}

export default Game;
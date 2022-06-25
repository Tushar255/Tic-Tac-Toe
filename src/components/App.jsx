import React, { useState, useEffect } from "react";
import Square from "./Square";
const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {

    const [gameState, updateGameState] = useState(initialState);
    const [isXChance, updateisXChance] = useState(false);
    const [h1, updateH1] = useState("Tic-Tac-Toe 2022");

    const onSquareClicked = (index) => {
        let strings = Array.from(gameState);
        
        if (!isXChance) {
            if (strings[index] === "") {
                strings[index] = "O";
                updateisXChance(!isXChance);
            }
        } else {
            if (strings[index] === "") {
                strings[index] = "X";
                updateisXChance(!isXChance);
            }
        }
        updateGameState(strings);
    }

    useEffect( 
        () => {
        const winner = checkWinner();
        if (winner) {
            updateisXChance(false);
            
            updateH1("🥳 " + winner + " has won the game 🥳");
            setTimeout(() => {
                updateGameState(initialState);
                updateH1("Tic-Tac-Toe 2022");
            }, 1551);
        }
    }, [gameState] // whenever gameState will change, this function will run.
    )

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
              return gameState[a];
            }
          }
          return null;
    }

    const reSet = () => {
        updateGameState(initialState);
        updateisXChance(false);
    }

    return (
    <div className="app-header">
        <p className="heading-text">{h1}</p>

        <div className="row jc-center" >
            <Square 
            className="b-bottom-right" 
            state={gameState[0]} 
            onClick={() => onSquareClicked(0)} />
            <Square 
            className="b-bottom-right" 
            state={gameState[1]} 
            onClick={() => onSquareClicked(1)} />
            <Square 
            className="b-bottom" 
            state={gameState[2]} 
            onClick={() => onSquareClicked(2)} />

        </div>
        <div className="row jc-center">
            <Square 
            className="b-bottom-right" 
            state={gameState[3]} 
            onClick={() => onSquareClicked(3)} />
            <Square 
            className="b-bottom-right" 
            state={gameState[4]} 
            onClick={() => onSquareClicked(4)} />
            <Square 
            className="b-bottom" 
            state={gameState[5]} 
            onClick={() => onSquareClicked(5)} />

        </div>
        <div className="row jc-center">
            <Square 
            className="b-right" 
            state={gameState[6]} 
            onClick={() => onSquareClicked(6)} />
            <Square 
            className="b-right" 
            state={gameState[7]} 
            onClick={() => onSquareClicked(7)} />
            <Square 
            state={gameState[8]} 
            onClick={() => onSquareClicked(8)} />
        </div>
        <button onClick={reSet} className="clear-button">Reset Game</button>
        <p>Developed by Tushar Bharane</p>
    </div>
    )
}

export default App;
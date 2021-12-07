import { useState, useEffect } from 'react';
import Box from './box';

function App() {
    const [moves, setMoves] = useState(Array(9).fill(""));
    const [nextPlayer, setNextPlayer] = useState("X");
    const [status, setStatus] = useState(`Next Player: ${nextPlayer}`);
    const [isWin, setIsWin] = useState(false)
    const boxValueArr = [4, 9, 2, 3, 5, 7, 8, 1, 6]

    useEffect(() => {
        !isWin && setStatus(`Next Player: ${nextPlayer}`);
        !isWin && !moves.includes("") && setStatus("Tie")
    }, [nextPlayer])

    const checkWinningMove = (lastMove) => {
        const values = boxValueArr.filter((_, i) => moves[i] === nextPlayer)
        values.forEach(value => {
            let winningMove = 15 - value - lastMove;
            if (values.includes(winningMove) && winningMove !== value) {
                setStatus(`Winner: ${nextPlayer}`)
                setIsWin(true)
            }
        })
    }

    const resetBoard = () => {
        setMoves(Array(9).fill(""))
        setIsWin(false)
        setNextPlayer("X")
    }

    const handleClick = (e) => {
        if (!isWin && moves.includes("")) {
            let index = parseInt(e.target.value);
            let lastMove = boxValueArr[index];
            checkWinningMove(lastMove);
            setMoves(prev => prev.map((e, i) => i === index ? nextPlayer : e))
            setNextPlayer(prev => prev === "X" ? "O" : "X");
        }
    }

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <h3 className="status">{status}</h3>
                {boxValueArr.map((elm, i) => 
                    <Box
                        key={elm}
                        value={i}
                        handleClick={!moves[i] ? handleClick : undefined}
                        content={moves[i]}
                    />
                )}
            </div>
            <button className="resetBtn" onClick={resetBoard}>Reset</button>
        </div>
    )
    }
export default App

import { useState, useEffect, useMemo } from 'react';
import './index.css';
import Box from './box';

function App() {
  const [contents, setContents] = useState({9: "", 14: "", 7: "", 8: "", 10: "", 12: "", 13: "", 6: "", 11: "" });
  const [moves, setMoves] = useState({O: [], X: []});
  const [nextPlayer, setNextPlayer] = useState("X");
  const [status, setStatus] = useState(`Next Player: ${nextPlayer}`);
  const [isGameEnded, setIsGameEnded] = useState(false)
  const boxIdArr = [9, 14, 7, 8, 10, 12, 13, 6, 11]
  
//   const totalMoves = useMemo(() => {
//         [...moves["X"], ...moves["O"]].length
//   }, [nextPlayer])
  
  useEffect(() => {
    !isGameEnded && setStatus(`Next Player: ${nextPlayer}`);
    !isGameEnded && [...moves["X"], ...moves["O"]].length === 9 && setStatus("Tie")
  }, [nextPlayer])
  
  const checkWinningMove = (moves, lastMove) => {
    moves.forEach(move => {
      let winningMove = 30 - lastMove - move;
      if (moves.includes(winningMove) && move !== winningMove) {
        setStatus(`Winner: ${nextPlayer}`)
        setIsGameEnded(true)
      }
    })
  }
  const resetBoard = () => {
    setMoves({O: [], X: []})
    setIsGameEnded(false)
    setNextPlayer("X")
    setContents({9: "", 14: "", 7: "", 8: "", 10: "", 12: "", 13: "", 6: "", 11: "" })
  }

  const handleClick = (e) => {
    if (!isGameEnded) {
      let lastMove = parseInt(e.target.value);
      checkWinningMove(moves[nextPlayer], lastMove);
      setMoves(prev => ({...prev, [nextPlayer]: [...prev[nextPlayer], lastMove]}))
      setContents(prev => ({...prev, [lastMove]: nextPlayer}))
      setNextPlayer(prev => prev === "X" ? "O" : "X");
    }
  }

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <h3 className="status">{status}</h3>
                {boxIdArr.map(elm => 
                    <Box
                    key={elm}
                    value={elm}
                    handleClick={handleClick}
                    content={contents[elm]}
                    />
                )}
            </div>
            <button className="resetBtn" onClick={resetBoard}>Reset</button>
        </div>
    )
}
export default App

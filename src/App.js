import Box from './box' 

function App() {
    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <h3 className="status">Status</h3>
            <div className="board">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <button className="resetBtn">Reset</button>
        </div>
    );
}

export default App;

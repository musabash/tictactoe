import Box from './components/box' 

function App() {
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
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
    </div>
  );
}

export default App;

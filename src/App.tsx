import React from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './modules/Board';
import { Colors } from './modules/Colors';
import { Player } from './modules/Player';

function App() {
  const [board, setBoard] = React.useState(new Board());

  const [whitePlayer, setWhitePlayer] = React.useState(new Player(Colors.WHITE));
  const [BlackPlayer, setBlackPlayer] = React.useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? BlackPlayer : whitePlayer);
  }

  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
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
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Black Figures" figures={board.lostBlackFigures} />
      </div>
      <div>
        <LostFigures title="White Figures" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
}

export default App;

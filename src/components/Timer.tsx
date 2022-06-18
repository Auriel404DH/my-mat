import React from 'react';
import { Colors } from '../modules/Colors';
import { Player } from '../modules/Player';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = React.useState<number>(300);
  const [whiteTime, setWhiteTime] = React.useState<number>(300);

  const timer = React.useRef<null | ReturnType<typeof setInterval>>(null);

  React.useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrWhiteTimer : decrBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }

  function decrWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestart}> Restart</button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;

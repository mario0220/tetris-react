import Menu from './Menu';
import {useGameOver} from '../hooks/useGameOver';

const Game = ({ rows, columns}) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
  };
  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start}/>
      ):(
        <p>Tetris</p>
      )}
    </div>
  );
};

export default Game;
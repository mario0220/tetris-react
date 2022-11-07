import "./Tetris.css";
import Board from "../components/Board";
import {useBoard } from "../hooks/useBoard";
import GameStats from "./GameStats";
import { useGameStats } from '../hooks/useGameStats';
import Previews from './Previews';
import { usePlayer } from '../hooks/usePlayer';
import GameController from "./GameController";

const Tetris = ({rows, columns, setGameOver}) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({ 
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  }); 

  return (
    <div className="Tetris">
      <GameStats gameStats={gameStats} />
      <Board board={board}/>
      <Previews tetrominoes={player.tetrominoes} />
      <GameController 
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
}

export default Tetris;
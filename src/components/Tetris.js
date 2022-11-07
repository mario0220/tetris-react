import "./Tetris.css";
import Board from "../components/Board";
import {useBoard } from "../hooks/useBoard";
import GameStats from "./GameStats";
import { useGameStats } from '../hooks/useGameStats';
import Previews from './Previews';
import { usePlayer } from '../hooks/usePlayer';

const Tetris = ({rows, columns, setGameOver}) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns});  
  const [player, setPlayer, resetPlayer] = usePlayer();

  return (
    <div className="Tetris">
      <GameStats gameStats={gameStats} />
      <Board board={board}/>
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
}

export default Tetris;
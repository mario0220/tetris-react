import { Action, actionForKey } from '../business/Input'
import './GameController.css';

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer
}) => {
  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);

    if( action === Action.Quit){
      setGameOver(true);
    }
  }
  const onKeyDown = ({ code }) => {

  }

  return (
    <input type="text" 
      className="GameController"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
}

export default GameController;
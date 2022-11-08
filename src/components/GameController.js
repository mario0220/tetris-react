import { Action, actionForKey } from '../business/Input'
import './GameController.css';
import { playerController } from '../business/PlayerController';

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
    const action = actionForKey(code);
    handleInput({action});
  }
  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
  };

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
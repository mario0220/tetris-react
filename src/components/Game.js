import Menu from './Menu';
const Game = ({ rows, columns}) => {

  const start = () => {
    console.log('hello from start function');
  };
  return (
    <div className="Game">
      <Menu onClick={start}/>
    </div>
  );
};

export default Game;
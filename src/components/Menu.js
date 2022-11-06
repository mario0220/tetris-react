import './Menu.css';

export default function Menu({ onClick }) {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play the Game
      </button>
    </div>
  )
}

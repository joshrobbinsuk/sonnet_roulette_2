export default function Randomiser(props) {
  const {handleRandomiser} = props
  return (
    <div className="randomiser">
      <div className="randomiser-main">
        <div className="btn-container">
          <button className="btn" onClick={handleRandomiser}></button>
        </div>
      </div>
      <div className="randomiser-header">
        <p> Click Bill to get a random sonnet</p>
      </div>
    </div>
  );
}
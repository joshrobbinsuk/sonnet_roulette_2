export default function Chooser(props) {
  const {number, handleNumberChange} = props;
  return (
    <div className="chooser">
      <div className="chooser-main">
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
        />
      </div>
      <div className="chooser-header">
        <p>Choose from 1 to 154</p>
      </div>
    </div>
  );
}

export default function RadioButtons(props) {
  const { radioChoice, handleRadioChange} = props;
  return (
    <div className="radio-buttons">
      <div>
        <input
          type="radio"
          id="spin"
          name="myRadio"
          value="spin"
          checked={radioChoice === "spin"}
          onChange={handleRadioChange}
        />
        <label htmlFor="spin">Spin</label>
      </div>
      <div>
        <input
          type="radio"
          id="choose"
          name="myRadio"
          value="choose"
          checked={radioChoice === "choose"}
          onChange={handleRadioChange}
        />
        <label htmlFor="choose">Choose</label>
      </div>
      <div>
        <input
          type="radio"
          id="search"
          name="myRadio"
          value="search"
          checked={radioChoice === "search"}
          onChange={handleRadioChange}
        />
        <label htmlFor="search">Search</label>
      </div>
    </div>
  );
}

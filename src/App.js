// import './App.css';
import { useState, useEffect } from "react";
import Randomiser from "./components/Randomiser";
import Chooser from "./components/Chooser";
import RadioButtons from "./components/RadioButtons";
import SearchChoices from "./components/SearchChoices";
import Sonnet from "./components/Sonnet";
import Searcher from "./components/Searcher";
import useFetch from "./myFunctions/useFetch";
import randomNumber from "./myFunctions/randomNumber";

function App() {
  const [number, setNumber] = useState(randomNumber);
  const [poem, setPoem] = useState(null);
  const [searchInput, setSearchInput] = useState("Heart");
  const [radioChoice, setRadioChoice] = useState("spin");

  // get API data on mount
  const { apiData, isLoading, requestError } = useFetch();

  // select different poem every time number changes
  useEffect(() => {
    if (number > 0) {
      setPoem(apiData[number - 1]);
    }
  }, [number, apiData]);

  //  functions to handle input changes
  function handleNumberChange(e) {
    const { value } = e.target;
    if (value > -1 && value < 155) {
      setNumber(value);
    }
  }

  function updateSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function handleRadioChange(e) {
    setRadioChoice(e.target.value);
  }

  function handleRandomiser() {
    setNumber(randomNumber());
  }

  function handleSelectSearchOption(e) {
    const selectedPoemIndex = apiData.findIndex((poem) => {
      return poem.title === e.target.textContent;
    });
    setNumber(selectedPoemIndex + 1);
    setRadioChoice("spin");
  }

  // render the app
  return (
    <div className="app-container">
      <div className="header-row-container">
        <header className="page-header">
          <h1> Sonnet Roulette </h1>
        </header>
      </div>
      <div className="main-row-container">
        <div className="sidebar-container-1 sidebar-container">
          <div className="sidebar-number-holder">
            <h3>{radioChoice === "search" || isLoading ? "?" : number}</h3>
          </div>
        </div>
        <div className="content-container">
          <div className="input-container">
            <div className="input-row">
              <div className="radio-container">
                <RadioButtons
                  handleRadioChange={handleRadioChange}
                  radioChoice={radioChoice}
                />
              </div>
              <div className="spin-choose-search-container">
                {radioChoice === "spin" ? (
                  <Randomiser
                    number={number}
                    handleRandomiser={handleRandomiser}
                  />
                ) : radioChoice === "choose" ? (
                  <Chooser
                    number={number}
                    handleNumberChange={handleNumberChange}
                  />
                ) : (
                  <Searcher
                    searchInput={searchInput}
                    updateSearchInput={updateSearchInput}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="output-container">
            {requestError ? (
              <h2>
                {" "}
                There was a problem accessing the sonnets... Try reloading the
                page...{" "}
              </h2>
            ) : isLoading ? (
              <h2> Sonnets are loading... </h2>
            ) : radioChoice === "search" ? (
              <SearchChoices
                apiData={apiData}
                searchInput={searchInput}
                handleSelectSearchOption={handleSelectSearchOption}
              />
            ) : (
              <Sonnet number={number} poem={poem} />
            )}
          </div>
          <div className="footer-container">
            <footer className="page-footer">
              <a href="https://twitter.com/jrobbinsuk">@joshrobbinsuk</a>
            </footer>
          </div>
        </div>
        <div className="sidebar-container-2 sidebar-container">
          <div className="sidebar-number-holder">
            <h3>{radioChoice === "search" || isLoading ? "?" : number}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

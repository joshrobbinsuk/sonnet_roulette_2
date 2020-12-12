export default function SearchChoices(props) {
  const {apiData, searchInput, handleSelectSearchOption} = props;
  const allFirstLines = apiData.map((poem) => poem.title);
  const firstLinesToView = allFirstLines.filter((line) =>
    line.toLowerCase().includes(searchInput.toLowerCase()),
  );
  return (
    <div className="search-options">
      <div className="searcher-options">
        <ul>
          {firstLinesToView.map((line) => (
            <li
              key={line}
              onClick={handleSelectSearchOption}
              className="search-option"
            >
              <h3>{line}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

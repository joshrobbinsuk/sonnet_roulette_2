export default function Searcher(props) {
  const {searchInput, updateSearchInput} = props;
  return (
    <div className="searcher">
      <div className="searcher-main">
        <input
          type="text"
          value={searchInput}
          onChange={updateSearchInput}
          width="5"
        />
      </div>
      <div className="searcher-header">
        <p> Search sonnet by first line then select</p>
      </div>
    </div>
  );
}

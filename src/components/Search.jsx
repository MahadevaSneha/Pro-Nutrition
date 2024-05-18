const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default Search;

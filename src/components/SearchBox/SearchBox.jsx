const SearchBox = ({filter, setFilter}) => {
  return (
    <div>
      <label htmlFor="search">Search contacts</label>
      <br />
      <input
        id="search"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter name to search..."
      />
    </div>
  );
};

export default SearchBox;

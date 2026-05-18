import React, { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 600);

  useEffect(() => {
    if (!debouncedQuery) return;

    console.log("API call with:" + debouncedQuery);

    //Simulated API
    // fetch(`http://localhost:3000/api?q=${debouncedQuery}`)
  }, [debouncedQuery]);

  return (
    <div>
      <h3>Search User</h3>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rouned p-1"
      />
    </div>
  );
};

export default SearchBox;

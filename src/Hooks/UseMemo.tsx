import React, { useState, useEffect, useMemo } from "react";

const UseMemo: React.FC = () => {
  const [data, setData] = useState<{ id: number; name: string }[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Memoized Filtered Data ✅
  const filteredData = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]); // Recalculates only when 'data' or 'search' changes

  return (
    <div>
      <h1>UseMemo</h1>
      <h2>
        It is used to call a function or something of long processes or tasks so
        that they can run fast....
      </h2>
      <span>Here is an example </span>
      <div>
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filteredData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseMemo;

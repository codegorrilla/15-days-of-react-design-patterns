import { useState } from "react";

export default function UserFinderPriority({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);

  const handleChange = ({ target: { value } }) => {
    //Set the searchterm on the text box
    setSearchTerm(value);

    //Filter the user list based on the search term
    setFiltered(
      users.filter((item) => {
        return item.name.includes(value);
      }),
    );
  };

  return (
    <div className="w-full min-h-screen">
      <h1>User finder</h1>
      <div>
        {users.length !== filtered.length ? `${filtered.length} matches` : null}
      </div>
      <input
        type="text"
        onChange={handleChange}
        value={searchTerm}
        placeholder="type a name"
        className="mt-2 mb-2 p-2 border rouned text-md text-black"
      />
      <div className="flex flex-row justify-start flex-wrap gap-10">
        {filtered.length > 0 ? (
          filtered.map((user) => (
            <div className="w-80 h-80 rounded-2xl" key={user.name}>
              <div>
                <img src={user.avatar} alt={`Avatar image of ${user.name}`} />
              </div>
              <div>
                <strong>{user.name}</strong>
              </div>
            </div>
          ))
        ) : (
          <h4>The match not found...</h4>
        )}
      </div>
    </div>
  );
}

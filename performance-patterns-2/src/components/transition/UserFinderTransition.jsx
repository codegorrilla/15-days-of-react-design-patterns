import { useState, useTransition } from "react";

export default function UserFinderTransition({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);

  //A standard hook to mark things non-urgent
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);

    //Execute non-urgent code
    startTransition(() => {
      //Filter the user list based on the search term
      setFiltered(users.filter((item) => item.name.includes(value)));
    });
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
      {isPending ? (
        <div>Loading...</div>
      ) : (
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
            <h4>No Match Found...</h4>
          )}
        </div>
      )}
    </div>
  );
}

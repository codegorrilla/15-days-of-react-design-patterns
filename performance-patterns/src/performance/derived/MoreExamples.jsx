import { useState, useMemo, useEffect } from "react";

export function Users({ list }) {
  const activeUsers = useMemo(() => {
    console.log("Filtering expensive list...");
    return list.filter((user) => user.active);
  }, [list]);

  return (
    <>
      <h2>Active Users: {activeUsers.length}</h2>
      {activeUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

//Wrong- boolean
export function Actor({ age }) {
  const [isAdult, setIsAdult] = useState(false);

  useEffect(() => {
    setIsAdult(age >= 18);
  }, [age]);

  return <>{isAdult ? <p>Adult</p> : <p>Minor</p>}</>;
}

//Correct approach
export function ActorAge({ age }) {
  return <>{age >= 18 ? <p>An Adult Actor</p> : <p>A Minor Actor</p>}</>;
}

//Wrong- Form
export function Form({ name, email }) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(name !== "" && email.includes("@"));
  }, [name, email]);

  return <>{isValid ? <p>All Good.</p> : <p>Form is invalid!</p>}</>;
}

//Correct approach
export function GoodForm({ name, email }) {
  return (
    <>{name !== "" && email.includes("@") ? <p>All Good.</p> : <p>Bad.</p>}</>
  );
}

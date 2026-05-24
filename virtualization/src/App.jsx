import React from "react";
import { List } from "react-window";

const generateUsers = (count = 200) => {
  const users = new Array(count);

  for (let i = 0; i < count; i++) {
    users[i] = `user-${Math.random(i + 1)}`;
  }

  return users;
};

const users = generateUsers();

const RowComponent = ({ index, style }) => {
  const user = users[index];

  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "10px",
      }}
    >
      {user}
    </div>
  );
};

const App = () => {
  return (
    <List height={600} itemCount={users.length} itemSize={35} width={800}>
      {(props) => <RowComponent {...props} />}
    </List>
  );
};

export default App;

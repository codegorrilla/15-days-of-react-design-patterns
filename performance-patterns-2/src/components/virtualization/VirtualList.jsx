import { FixedSizeList as List } from "react-window";

const user_data = Array.from({ length: 500 }, (_, index) => ({
  id: index,
  name: `User ${index + 1}`,
}));

//The row component still receives an index and a style object
const Row = ({ index, style }) => {
  const user = user_data[index];

  return (
    <div
      style={{ ...style, borderBottom: "1px solid #eee", lineHeight: "50px" }}
    >
      {user.name}
    </div>
  );
};
export default function VirtualList() {
  return (
    <List height={400} width="100%" ItemSize={80} ItemCount={user_data.length}>
      {Row}
    </List>
  );
}

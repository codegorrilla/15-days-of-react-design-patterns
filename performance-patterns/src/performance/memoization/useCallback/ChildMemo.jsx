import { memo } from "react";

const ChildMemo = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default ChildMemo;

import { useEffect, useRef } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); //directly accesses the DOM
  }, []);

  return (
    <input
      type="text"
      className="border rounded-2xl p-2 my-3"
      ref={inputRef} //DOM Node
      placeholder="Type here..."
    />
  );
};

export default AutoFocusInput;

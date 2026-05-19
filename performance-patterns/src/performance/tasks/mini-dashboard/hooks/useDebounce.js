import { useState, useEffect } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const fn = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(fn);
  }, [value, delay]);

  return debouncedVal;
};

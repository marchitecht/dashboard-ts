import { useState } from "react";
import cls from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className={cls.btn}>
        <div>{count}</div>
        <button onClick={increment}>Click</button>
      </div>
    </div>
  );
};

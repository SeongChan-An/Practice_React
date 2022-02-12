import React, { useCallback, useRef, useState, useEffect } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  // 매번 생성할 때마다 새로 만듬 React.createRef();
  const spanRef = useRef(); // 한번 만들고 메모리에 저장

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

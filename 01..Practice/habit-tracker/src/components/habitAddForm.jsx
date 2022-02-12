import React, { memo } from "react";

// rsi emmet
// meom : 클래스의 purecomponent 와 동일, 값이 변경되지 않으면 업데이트 하지 않음
const habitAddForm = memo((props) => {
  // Refs and the DOM: https://reactjs.org/docs/refs-and-the-dom.html
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default habitAddForm;

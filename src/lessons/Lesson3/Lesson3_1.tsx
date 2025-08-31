import { useRef, useState } from "react";

const Lesson3_1 = () => {
  const [inputValue, setInputValue] = useState("Hello");

  const ref = useRef(0);
  console.log(ref);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Click me!</button>
      <p>{ref.current}</p>
      <p>{inputValue}</p>
    </div>
  );
};

export default Lesson3_1;

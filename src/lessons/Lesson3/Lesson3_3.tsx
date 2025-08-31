import { useRef } from "react";

const Lesson3_3 = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const inputNode = inputRef.current?.value;
    if (!inputNode) return;
    console.log(inputNode);
  };

  return (
    <div>
      <input type="text" className="border-b" ref={inputRef}  />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;

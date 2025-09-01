import { memo, useState } from "react";
import { useToggle } from "./hooks/useToggle";

// Child component moved outside of the parent component so that its reference
// does not change on every parent re-render. This allows React.memo to skip
// re-rendering the child when its props have not changed.
// eslint-disable-next-line react-refresh/only-export-components
const Child = memo(() => {
  const [on, toggle] = useToggle(false);
  console.log("Child rendered");
  let i = 0;
  while (i < 10000000) i++;
  return (
    <div>
      <p>Child {on ? "ON" : "OFF"}</p>
      <button onClick={toggle} className="border-2 px-2 py-2 rounded-md">
        Toggle
      </button>
    </div>
  );
});

const Lesson5_2 = () => {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <p>Parent: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Parent Count
      </button>
      <Child />
    </div>
  );
};

export default Lesson5_2;

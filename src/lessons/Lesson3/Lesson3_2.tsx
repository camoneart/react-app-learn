import { useRef } from "react";

const Lesson3_2 = () => {
  // HTMLUListElement 型の参照。初期値は null
  const listRef = useRef<HTMLUListElement | null>(null);

  const scrollToIndex = (i: number) => {
    const listNode = listRef.current;
    if (!listNode) return; // listNode が null の場合は終了

    const imgNodes = listNode.querySelectorAll("img")[i];
    console.log(imgNodes);

    imgNodes.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="flex justify-center gap-4">
        <button onClick={() => scrollToIndex(0)}>Cat1</button>
        <button onClick={() => scrollToIndex(1)}>Cat2</button>
        <button onClick={() => scrollToIndex(2)}>Cat3</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
          ref={listRef}
        >
          <li>
            <img
              src="https://api.thecatapi.com/v1/images/search?size=small"
              alt="Cat 1"
              width="200"
              height="200"
            />
          </li>
          <li>
            <img
              src="https://api.thecatapi.com/v1/images/search?size=med"
              alt="Cat 2"
              width="300"
              height="200"
            />
          </li>
          <li>
            <img
              src="https://api.thecatapi.com/v1/images/search?size=small"
              alt="Cat 3"
              width="250"
              height="200"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;

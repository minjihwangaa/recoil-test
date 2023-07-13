import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import "./App.css";
import Todos from "./components/Todos";
import {
  countNum,
  fetchUserDetails,
  fetchUserDetailsSF,
  totalTodos,
} from "./state/selectors/TotalTodos";
import { useState } from "react";

const UserInfo = (selectNum) => {
  const userLoadable = useRecoilValueLoadable(
    fetchUserDetailsSF(selectNum.num)
  ); // parameter + 비동기
  switch (userLoadable.state) {
    case "hasValue":
      return (
        <div>
          {userLoadable.contents
            ? userLoadable?.contents?.data.title
            : "숫자를 클릭해주세요"}
        </div>
      );
    case "loading":
      return <div>Loading..</div>;
    case "hasError":
      return <div style={{ color: "red" }}>Error..</div>;
  }
};

function App() {
  const totalTodoState = useRecoilValue(totalTodos);
  const [count, setCount] = useRecoilState(countNum);
  const userDetails = useRecoilValue(fetchUserDetails); //parameter 없는 비동기
  const Numarray = [1, 2, 3, 4];
  const [selectNum, setSelectNum] = useState(null);

  return (
    <div className="App">
      <h1>todo app with recoil and react</h1>
      <Todos />
      <h3>Total Todos: {totalTodoState}</h3>
      <div style={{ color: "red" }} onClick={() => setCount(count + 2)}>
        {count}
      </div>
      {userDetails?.products?.map((el, idx) => (
        <div key={idx}>{el.title}</div>
      ))}
      <div>
        {Numarray?.map((el, idx) => (
          <span
            key={idx}
            style={{
              color: "blue",
              fontSize: "32px",
            }}
            onClick={() => setSelectNum(el)}
          >
            {el}
          </span>
        ))}
      </div>
      <UserInfo num={selectNum} />
    </div>
  );
}

export default App;

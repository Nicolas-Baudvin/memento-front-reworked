import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";
import BoardButtons from "../BoardButton";

import BoardMenu from "./BoardMenu";


const Board = () => {
  const { current } = useSelector((state: RootState) => state.boards);

  return (
    <div className="currentboard-container">
      <div className="currentboard-header">
        <div className="currentboard-header-left">
          <BoardMenu />
          <h1>{current?.title}</h1>
        </div>
        <BoardButtons />
      </div>
    </div>
  );
};

export default Board;

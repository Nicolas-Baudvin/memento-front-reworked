import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";
import BoardButtons from "./BoardMenu/BoardButton";

import BoardMenu from "./BoardMenu";
import reducer, {
  initialState,
} from "../utils/reducer";
import { useReducer } from "react";
import CreateList from "./CreateList";

const Board = () => {
  const { current } = useSelector((state: RootState) => state.boards);
  const [state, localDispatch] = useReducer(reducer, initialState);

  return (
    <div className="currentboard-container">
      <div className="currentboard-header">
        <div className="currentboard-header-left">
          <BoardMenu />
          <h1>{current?.title}</h1>
        </div>
        <BoardButtons />
      </div>
      <div className="currentboard-content">
        <div className="currentboard-content-lists">
          <CreateList localDispatch={localDispatch} state={state} />
        </div>
      </div>
    </div>
  );
};

export default Board;

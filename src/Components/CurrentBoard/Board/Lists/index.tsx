import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/reducer";
import { CurrentboardActions, CurrentboardLocalState } from "../../utils/reducer";
import CreateList from "../CreateList";
import List from "./List";

interface ListProps {
  localDispatch: React.Dispatch<CurrentboardActions>;
  state: CurrentboardLocalState;
}

const Lists = ({localDispatch, state}: ListProps) => {
  const { current } = useSelector((state: RootState) => state.boards);

    return (
      <div className="currentboard-content-lists">
        {current?.lists &&
          current.lists.map((list, i) => (
            <List list={list} index={i} />
          ))}
        <CreateList localDispatch={localDispatch} state={state} />
      </div>
    );
};

export default Lists;
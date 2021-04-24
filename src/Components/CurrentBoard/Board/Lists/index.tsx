import { MdMoreVert } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/reducer";
import { CurrentboardActions, CurrentboardLocalState } from "../../utils/reducer";
import CreateList from "../CreateList";

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
            <div key={i} className="currentboard-content-lists__item">
              <h2 style={{ backgroundColor: list.color }}>
                {" "}
                {list.title}{" "}
                <button className="button-icon">
                  <MdMoreVert />
                </button>
              </h2>
              <div className="currentboard-content-lists__item-tasks"></div>
            </div>
          ))}
        <CreateList localDispatch={localDispatch} state={state} />
      </div>
    );
};

export default Lists;
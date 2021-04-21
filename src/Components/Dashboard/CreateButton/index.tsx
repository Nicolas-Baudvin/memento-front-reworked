import CreateBoards from "../CreateBoards";
import cx from "classnames";
import { DashBoardUseReducerActions, LocalState } from "../utils/types";
import { newIsShowState } from "../utils/actions";

interface Props {
  localDispatch: React.Dispatch<DashBoardUseReducerActions>;
  state: LocalState
}

const CreateButton = ({ localDispatch, state }: Props) => {

      const handleClickCreateBoard = () => localDispatch(newIsShowState(!state.isShow));
    return (
      <div className="dashboard-create">
        <div
          onClick={handleClickCreateBoard}
          className={cx("dashboard-create-add", {
            "dashboard-create-hide": state.isShow,
          })}
        >
          <img
            className="dashboard-create-plus"
            src={`${process.env.PUBLIC_URL}/img/plus.svg`}
            alt="Ajouter un tableau"
          />
          <p>Ajouter</p>
        </div>
        <CreateBoards state={state} localDispatch={localDispatch} />
      </div>
    );
};

export default CreateButton;
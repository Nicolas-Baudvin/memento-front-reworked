import cx from "classnames";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeListName, deleteList } from "../../../../Store/Tabs/actions";
import { List } from "../../../../Store/Tabs/types";
import reducer, { initialState, newInputValue } from "./reducer";
import { RootState } from "../../../../Store/reducer";

interface ListMenuProps {
  isShowMenu: boolean;
  list: List;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListMenu = ({ isShowMenu, list, setShowMenu }: ListMenuProps) => {
  const { current } = useSelector((state: RootState) => state.boards);
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 20) {
      return;
    }
    localDispatch(newInputValue(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.value) {
      dispatch(changeListName(list, state.value));
    }
  };

  const handleClickDeleteList = () => {
    dispatch(deleteList(list));
    setShowMenu(false);
  };

  useEffect(() => {
    if (current) localDispatch(newInputValue(current.title));
  }, [current]);

  return (
    <div
      className={cx("currentboard-content-lists__item-menu", {
        "menu-list-show": isShowMenu,
      })}
    >
      <form onSubmit={handleSubmit} action="">
        <input
          className="currentboard-content-lists__item-menu-input"
          type="text"
          placeholder="Nouveau nom"
          value={state.value}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="currentboard-content-lists__item-menu-input-submit"
        >
          Confirmer
        </button>
      </form>
      <button
        onClick={() => handleClickDeleteList()}
        className="currentboard-content-lists__item-menu-button"
      >
        Supprimer
      </button>
    </div>
  );
};

export default ListMenu;

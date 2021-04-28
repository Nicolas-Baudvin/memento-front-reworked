import cx from "classnames";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { deleteList } from "../../../../Store/Tabs/actions";
import { List } from "../../../../Store/Tabs/types";
import reducer, { initialState, newInputValue } from "./reducer";

interface ListMenuProps {
  isShowMenu: boolean;
  list: List;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const ListMenu = ({ isShowMenu, list, setShowMenu }: ListMenuProps) => {
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
  };

  const handleClickDeleteList = () => {
    dispatch(deleteList(list));
    setShowMenu(false);
  };

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

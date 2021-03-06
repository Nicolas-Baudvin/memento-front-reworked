import cx from "classnames";
import { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reducer, { initialState, newInputValue } from "./reducer";
import { RootState } from "../../../../Store/reducer";
import { listAction } from "../../../../Store/List/actions";
import { List } from "../../../../Store/List/types";

interface ListMenuProps {
  isShowMenu: boolean;
  list: List;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListMenu = ({ isShowMenu, list, setShowMenu }: ListMenuProps) => {
  const { current } = useSelector((State: RootState) => State.boards);
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
      dispatch(listAction({ list, title: state.value }, "title"));
    }
  };

  const handleClickDeleteList = () => {
    dispatch(listAction({ list }, "delete"));
    setShowMenu(false);
  };

  useEffect(() => {
    if (current?.lists) localDispatch(newInputValue(list.title));
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

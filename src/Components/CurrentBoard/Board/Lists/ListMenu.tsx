import cx from "classnames";
import { useState } from "react";
import { List } from "../../../../Store/Tabs/types";

interface ListMenuProps {
  isShowMenu: boolean;
  list: List;
}

const ListMenu = ({ isShowMenu, list }: ListMenuProps) => {
  const [value, setValue] = useState(list.title);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="currentboard-content-lists__item-menu-input-submit">
          Confirmer
        </button>
      </form>
      <button className="currentboard-content-lists__item-menu-button">
        Supprimer
      </button>
    </div>
  );
};

export default ListMenu;

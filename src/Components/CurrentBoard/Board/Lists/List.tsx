import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { List as ListType } from "../../../../Store/Tabs/types";
import ListMenu from "./ListMenu";

interface ListProps {
    list: ListType;
    index: number
}

const List = ({ list, index }: ListProps) => {
      const [isShowMenu, setShowMenu] = useState(false);
      const handleClickMenuButton = () => setShowMenu(!isShowMenu);
    return (
      <div key={index} className="currentboard-content-lists__item">
        <h2 style={{ backgroundColor: list.color }}>
          {" "}
          {list.title}{" "}
          <button onClick={handleClickMenuButton} className="button-icon">
            <MdMoreVert />
          </button>
          <ListMenu isShowMenu={isShowMenu} list={list} setShowMenu={setShowMenu} />
        </h2>
        <div className="currentboard-content-lists__item-tasks"></div>
      </div>
    );
};

export default List;
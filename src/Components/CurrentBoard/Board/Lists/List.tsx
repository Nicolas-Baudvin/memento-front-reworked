import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { List as ListType } from "../../../../Store/Tabs/types";
import { Draggable } from "react-beautiful-dnd";
import ListMenu from "./ListMenu";

interface ListProps {
  list: ListType;
  index: number;
}

const List = ({ list, index }: ListProps) => {
  const [isShowMenu, setShowMenu] = useState(false);
  const handleClickMenuButton = () => setShowMenu(!isShowMenu);
  return (
    <Draggable key={index} index={list.order} draggableId={list._id}>
      { (provided) => <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={index} className="currentboard-content-lists__item">
        <h2 style={{ backgroundColor: list.color }}>
          {" "}
          {list.title}{" "}
          <button onClick={handleClickMenuButton} className="button-icon">
            <MdMoreVert />
          </button>
          <ListMenu
            isShowMenu={isShowMenu}
            list={list}
            setShowMenu={setShowMenu}
          />
        </h2>
        <div className="currentboard-content-lists__item-tasks"></div>
      </div>}
    </Draggable>
  );
};

export default List;

import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { List as ListType } from "../../../../Store/List/types";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ListMenu from "./ListMenu";
import Task from "./Tasks/Task";
import "./style.scss";
import CreateTaskForm from "./CreateTaskForm";

interface ListProps {
  list: ListType;
  index: string;
}

const List = ({ list, index }: ListProps) => {
  const [isShowMenu, setShowMenu] = useState(false);
  const handleClickMenuButton = () => setShowMenu(!isShowMenu);

  return (
    <Draggable key={index} index={list.order} draggableId={list._id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          data-order={list.order}
          key={index}
          className="currentboard-content-lists__item"
        >
          <h2 style={{ backgroundColor: list.color }}>
            {list.title}
            <button onClick={handleClickMenuButton} className="button-icon">
              <MdMoreVert />
            </button>
            <ListMenu
              isShowMenu={isShowMenu}
              list={list}
              setShowMenu={setShowMenu}
            />
          </h2>
          <Droppable direction="vertical" type="task" droppableId={list._id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                className="currentboard-content-lists__item-tasks"
              >
                {list.tasks.length !== 0 &&
                  list.tasks.map((task, i) => (
                    <Task key={i} task={task} index={i} list={list} />
                  ))}
                {provided.placeholder}
                <CreateTaskForm list={list} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default List;

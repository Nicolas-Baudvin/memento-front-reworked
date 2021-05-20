import { MdMoreVert, MdWarning } from "react-icons/md";
import { useState } from "react";
import { Task as TaskType } from "../../../../../Store/Tasks/types";
import TaskMenu from "./TaskMenu";
import "./style.scss";
import { List } from "../../../../../Store/List/types";
import { Draggable } from "react-beautiful-dnd";

interface TaskProps {
  task: TaskType;
  index: number;
  list: List;
}

const Task = ({ task, index, list }: TaskProps) => {
  const [show, setShow] = useState(false);
  const handleClickShow = () => setShow(!show);
  return (
    <Draggable index={task.order} draggableId={task._id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task"
        >
          {task.importance && <MdWarning className="task-importance" />}
          <div className="task-container">
            <p className="task-desc">{task.desc}</p>
            <div className="task-container-subdesc">
              {task.author && <p className="task-author">{task.author}</p>}
              <time>{task.date}</time>
            </div>
          </div>
          <button
            style={{ color: list.color }}
            onClick={handleClickShow}
            className="button-icon task-menu-button-display"
          >
            <MdMoreVert style={{ color: list.color }} />
          </button>
          <TaskMenu
            task={task}
            index={index}
            list={list}
            setShow={setShow}
            show={show}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Task;

import { MdMoreVert, MdWarning } from "react-icons/md";
import { useState } from "react";
import { Task as TaskType } from "../../../../../Store/Tasks/types";
import TaskMenu from "./TaskMenu";
import "./style.scss";
import { List } from "../../../../../Store/Tabs/types";

interface TaskProps {
  task: TaskType;
  index: number;
  list: List;
}

const Task = ({ task, index, list }: TaskProps) => {
  const [show, setShow] = useState(false);
  const handleClickShow = () => setShow(!show);
  return (
    <div className="task">
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
        className="button-icon task-menu-button"
      >
        <MdMoreVert style={{ color: list.color }} />
      </button>
      {show && <TaskMenu task={task} index={index} list={list} />}
    </div>
  );
};

export default Task;

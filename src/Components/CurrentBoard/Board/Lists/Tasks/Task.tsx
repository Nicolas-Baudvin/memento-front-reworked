import { MdMoreVert, MdWarning } from "react-icons/md";
import { useState } from "react";
import { Tasks } from "../../../../../Store/Tabs/types";
import TaskMenu from "./TaskMenu";
import "./style.scss";

interface TaskProps {
  task: Tasks;
  index: number;
}

const Task = ({ task, index }: TaskProps) => {
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
      <button onClick={handleClickShow} className="button-icon">
        <MdMoreVert />
      </button>
      {
        show && <TaskMenu task={task} index={index} />
      }
    </div>
  );
};

export default Task;

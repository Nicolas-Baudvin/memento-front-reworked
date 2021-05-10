import { useState } from "react";
import { Tasks } from "../../../../../Store/Tabs/types";

interface TaskMenuProps {
  task: Tasks;
  index: number;
}

const TaskMenu = ({ task, index }: TaskMenuProps) => {
    const [value, setValue] = useState(task.desc);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }
  return (
    <div className="task-menu">
      <button className="task-menu-button">Supprimer</button>
      <button className="task-menu-button">Modifier l'importance</button>
      <button className="task-menu-button">S'attribuer</button>
      <form action="">
        <textarea onChange={handleChange} value={value} name="desc" cols={30} rows={10} />
        <button type="submit" className="task-menu-form-submit">
          Confirmer
        </button>
      </form>
    </div>
  );
};

export default TaskMenu;

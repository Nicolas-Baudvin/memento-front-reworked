import { useState } from "react";
import cx from "classnames";
import { List } from "../../../../../Store/List/types";
import { Task } from "../../../../../Store/Tasks/types";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../../../../Store/Tasks/actions";
import { RootState } from "../../../../../Store/reducer";

interface TaskMenuProps {
  task: Task;
  index: number;
  list: List;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskMenu = ({ task, index, list, show, setShow }: TaskMenuProps) => {
  const { username } = useSelector((State: RootState) => State.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState(task.desc);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  const onClose = () => setShow(!show);

  const onDelete = () => {
    dispatch(taskAction({ list, task }, "delete"));
    setShow(!show);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(taskAction({ newDesc: value, list, task }, "desc"));
    setShow(!show);
  };

  const onClickImportance = () => {
    dispatch(
      taskAction({ importance: !task.importance, task, list }, "importance")
    );
    setShow(!show);
  };

  const onClickAppropriate = () => {
    dispatch(taskAction({ author: username, task, list }, "author"));
    setShow(!show);
  };

  return (
    <div className={cx("task-menu", { "task-menu-show": show })}>
      <button onClick={onDelete} className="task-menu-button">
        Supprimer
      </button>
      <button onClick={onClickImportance} className="task-menu-button">
        Modifier l'importance
      </button>
      <button onClick={onClickAppropriate} className="task-menu-button">
        S'attribuer
      </button>
      <form onSubmit={onSubmit} className="task-menu-form" action="">
        <textarea
          onChange={handleChange}
          value={value}
          name="desc"
          cols={30}
          rows={10}
        />
        <button type="submit" className="task-menu-form-submit">
          Confirmer
        </button>
      </form>
      <button onClick={onClose} className="task-menu-button back">
        Retour
      </button>
    </div>
  );
};

export default TaskMenu;

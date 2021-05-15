import { useState } from "react";
import { useDispatch } from "react-redux";
import { List } from "../../../../Store/List/types";
import { newTask } from "../../../../Store/Tasks/actions";

interface CreateTaskFormProps {
  list: List;
}

const CreateTaskForm = ({ list }: CreateTaskFormProps) => {
  const dispatch = useDispatch();
  const [taskName, setTaskValue] = useState("");

  const handleChangeTaskValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTaskValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newTask({ taskName, list }));
  };

  return (
    <form onSubmit={handleSubmit} className="list-form" action="">
      <textarea
        value={taskName}
        onChange={handleChangeTaskValue}
        name="task"
        cols={30}
        rows={10}
      />
      <button
        style={{ backgroundColor: list.color }}
        className="list-form-submit"
        type="submit"
      >
        Créer Tâche
      </button>
    </form>
  );
};

export default CreateTaskForm;

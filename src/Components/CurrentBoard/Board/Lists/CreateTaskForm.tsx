import { useState } from "react";
import { useDispatch } from "react-redux";
import { List } from "../../../../Store/Tabs/types";

interface CreateTaskFormProps {
  list: List;
}

const CreateTaskForm = ({ list }: CreateTaskFormProps) => {
  const dispatch = useDispatch();
  const [newTaskValue, setTaskValue] = useState("");
  const handleChangeTaskValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTaskValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="list-form" action="">
      <textarea
        value={newTaskValue}
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

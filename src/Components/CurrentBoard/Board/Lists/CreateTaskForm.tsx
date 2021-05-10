import { useState } from "react";
import { List } from "../../../../Store/Tabs/types";

interface CreateTaskFormProps {
    list: List
}

const CreateTaskForm = ({ list }: CreateTaskFormProps) => {
    const [newTaskValue, setTaskValue] = useState("");
    const handleChangeTaskValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setTaskValue(e.target.value);
    return (
      <form className="list-form" action="">
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
        >
          Créer Tâche
        </button>
      </form>
    );
};

export default CreateTaskForm;
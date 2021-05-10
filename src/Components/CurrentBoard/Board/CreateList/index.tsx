import { CurrentboardActions, CurrentboardLocalState } from "../../utils/reducer";
import CreateListForm from "./CreateListForm";

interface CreateListeProps {
    localDispatch: React.Dispatch<CurrentboardActions>
    state: CurrentboardLocalState
}

const CreateList: React.FC<CreateListeProps> = ({ localDispatch, state }) => {

  return (
    <div className="currentboard-content-lists-add">
      <h2>Ajouter une liste</h2>
      <CreateListForm
        localDispatch={localDispatch}
        state={state}
      />
    </div>
  );
};

export default CreateList;

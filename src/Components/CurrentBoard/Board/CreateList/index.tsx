import { ChromePicker, ColorResult } from "react-color";
import { MdClose } from "react-icons/md";
import { CurrentboardActions, CurrentboardLocalState, newPickerColor, newPickerVisibility } from "../../utils/reducer";
import CreateListForm from "./CreateListForm";

interface CreateListeProps {
    localDispatch: React.Dispatch<CurrentboardActions>
    state: CurrentboardLocalState
}

const CreateList: React.FC<CreateListeProps> = ({ localDispatch, state }) => {

  const changePickerVisibility = () => {
    localDispatch(newPickerVisibility(!state.isShowingPicker));
  };

  const handleChangePicker = (color: ColorResult) => {
    localDispatch(newPickerColor(color.hex));
  };
  return (
    <div className="currentboard-content-lists-add">
      <h2>Ajouter une liste</h2>
      <CreateListForm
        localDispatch={localDispatch}
        state={state}
        changePickerVisibility={changePickerVisibility}
      />
      {state.isShowingPicker && (
        <>
          <div className="picker-close">
            <MdClose onClick={changePickerVisibility} />
          </div>
          <ChromePicker
            className="picker"
            color={state.colorPicked}
            onChange={handleChangePicker}
          />
        </>
      )}
    </div>
  );
};

export default CreateList;

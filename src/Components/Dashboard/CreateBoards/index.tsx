import cx from "classnames";
import { useDispatch } from "react-redux";
import { throwNewError } from "../../../Store/Message/actions";
import { newBoard } from "../../../Store/Tabs/actions";
import { ImageData } from "../../../Store/Tabs/types";
import { newImageSelected, newIsShowState, newTitle } from "../utils/actions";
import { DashBoardUseReducerActions, LocalState } from "../utils/types";
import Pictures from "./Pictures";

interface CreateBoardsProps {
  localDispatch: React.Dispatch<DashBoardUseReducerActions>;
  state: LocalState;
}

const CreateBoards: React.FC<CreateBoardsProps> = ({ state, localDispatch }) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 20) return;
    localDispatch(newTitle(e.target.value));
  };

  const handleClickImage = (imageData: ImageData) => localDispatch(newImageSelected(imageData));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.image.url && state.title) dispatch(newBoard({ image: state.image, title: state.title }));

    if (!state.image.url) dispatch(throwNewError("Veuillez selectionner une image"));
    else if (!state.title) dispatch(throwNewError("Veuillez préciser le nom du tableau"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx("dashboard-form", { "dashboard-form-show": state.isShow })}
    >
      <input
        onChange={handleChange}
        value={state.title}
        type="text"
        placeholder="Titre du tableau"
        className="dashboard-form-input"
      />
      <Pictures handleClickImage={handleClickImage} />

      <button type="submit" className="dashboard-form-button purple">Créer</button>
      <button
        type="button"
        onClick={() => localDispatch(newIsShowState(!state.isShow))}
        className="dashboard-form-button red"
      >
        Retour
      </button>
    </form>
  );
};

export default CreateBoards;

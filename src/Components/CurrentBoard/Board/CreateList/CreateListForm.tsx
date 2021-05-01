import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { MouseEventHandler } from "react-router/node_modules/@types/react";
import Input from "../../../../ReusableComponents/Input";
import { newList } from "../../../../Store/Tabs/actions";
import {
  CurrentboardActions,
  CurrentboardLocalState,
  newCreateListError,
  newListName,
  newPickerColor,
} from "../../utils/reducer";

interface CreateListFormProps {
  localDispatch: React.Dispatch<CurrentboardActions>;
  state: CurrentboardLocalState;
  changePickerVisibility: MouseEventHandler<HTMLDivElement>;
}

interface ColorChoice {
  [index: string]: string;
}
const colors: ColorChoice = {
  red: "#ff1b1c",
  purple: "#6622cc",
  green: "#e36410",
  orange: "#0a8754",
  blue: "#eec643",
  yellow: "#0d21a1",
};

const CreateListForm: React.FC<CreateListFormProps> = ({
  localDispatch,
  state,
  changePickerVisibility,
}) => {
  const dispatch = useDispatch();
  const handleSubmitListDatas = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { listName, colorPicked } = state;
    if (!listName) {
      return localDispatch(newCreateListError("Le nom de la liste est incorrect. (20 caractères max)"));
    }
    if (!colorPicked) {
      return localDispatch(newCreateListError("Vous devez choisir une couleur."));
    }
    dispatch(newList({ title: listName, color: colorPicked }));
    localDispatch(newCreateListError(""));
    localDispatch(newListName(""));
    localDispatch(newPickerColor(""));
  };

  const handleClickColor = (color: string) => {
    const choosenColor = colors[color];
    localDispatch(newPickerColor(choosenColor));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 20) {
      return;
    }
    localDispatch(newListName(e.target.value));
  };
  return (
    <form onSubmit={handleSubmitListDatas} action="">
      <Input
        placeholder="Libéllé de la liste"
        htmlFor="libelle"
        type="text"
        value={state.listName}
        onChange={handleChange}
      />
      <h2>Couleur de la liste</h2>
      <div className="currentboard-content-lists-add-colors">
        {Object.keys(colors).map((color, i) => (
          <div
            onClick={() => handleClickColor(color)}
            className={`currentboard-content-lists-add-colors__${color} coloors`}
            key={i}
          ></div>
        ))}
        <div
          onClick={changePickerVisibility}
          className="currentboard-content-lists-add-colors__plus coloors"
          style={{ backgroundColor: state.colorPicked }}
        >
          <MdAdd style={{ color: "#6622cc" }} />
        </div>
      </div>
      <button style={{ margin: ".6em 0 0 0" }} className="button">
        Créer
      </button>
      <p className="currentboard-content-lists-add-error">
        {state.createListError}
      </p>
    </form>
  );
};

export default CreateListForm;

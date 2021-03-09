import cx from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { throwNewError } from "../../../Store/Message/actions";
import { newBoard } from "../../../Store/Tabs/actions";
import { ImageData } from "../../../Store/Tabs/types";
import Pictures from "./Pictures";

interface CreateBoardsProps {
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateBoards: React.FC<CreateBoardsProps> = ({ isShow, setShow }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState<ImageData>({
    url: "",
    alt: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 20) return;
    setTitle(e.target.value);
  };

  const handleClickImage = (imageData: ImageData) => setImage(imageData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image.url && title) dispatch(newBoard({ image, title }));

    if (!image.url) dispatch(throwNewError("Veuillez selectionner une image"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx("dashboard-form", { "dashboard-form-show": isShow })}
    >
      <input
        onChange={handleChange}
        value={title}
        type="text"
        placeholder="Titre du tableau"
      />
      <Pictures handleClickImage={handleClickImage} />

      <button type="submit" className="dashboard-form-button purple">Créer</button>
      <button
        type="button"
        onClick={() => setShow(!isShow)}
        className="dashboard-form-button red"
      >
        Retour
      </button>
    </form>
  );
};

export default CreateBoards;

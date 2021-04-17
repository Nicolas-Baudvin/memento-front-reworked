import { MdDelete, MdAdd } from "react-icons/md";
import ReactTooltip from "react-tooltip";

const BoardButtons = () => {
  return (
    <div className="currentboard-header-right">
      <button data-tip data-for="add" className="button-menu">
        <MdAdd />
      </button>
      <ReactTooltip aria-haspopup="true" role="help" id="add">
        <span>Ajouter une liste</span>
      </ReactTooltip>
      <button data-tip data-for="delete" className="button-menu">
        <MdDelete />
      </button>
      <ReactTooltip aria-haspopup="true" role="help" id="delete">
        <span>Supprimer ce tableau</span>
      </ReactTooltip>
    </div>
  );
};

export default BoardButtons;

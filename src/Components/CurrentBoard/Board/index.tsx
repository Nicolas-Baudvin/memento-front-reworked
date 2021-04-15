import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";
import { MdMenu, MdDelete, MdAdd } from "react-icons/md";
import ReactTooltip from "react-tooltip";

const Board = () => {
  const { current } = useSelector((state: RootState) => state.boards);

  return (
    <div className="currentboard-container">
      <div className="currentboard-header">
        <div className="currentboard-header-left">
          <button data-for="menu" data-tip className="button-menu">
            <MdMenu />
          </button>
          <ReactTooltip aria-haspopup="true" role="help" id="menu">
            <span>Menu</span>
          </ReactTooltip>
          <h1>{current?.title}</h1>
        </div>
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
      </div>
    </div>
  );
};

export default Board;

import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import { deleteBoard, getBoards } from "../../Store/Tabs/actions";
import AllBoards from "./AllBoards";
import CreateButton from "./CreateButton";
import Modale from "../Modale";
import { Board } from "../../Store/Tabs/types";
import {
  initialState,
  newBoardSelected,
  newVisibleState,
  reducer,
} from "./utils";
import "./style.scss";

const title = "Êtes vous sûre ?";
const content =
  "Cette action est définitive et aucun retour en arrière n'est possible.";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);
  const { all } = useSelector((state: RootState) => state.boards);
  const history = useHistory();
  const [state, localDispatch] = useReducer(reducer, initialState);

  const handleClickBackButton = () => localDispatch(newVisibleState(false));

  const handleClickNextButton = () => {
    localDispatch(newVisibleState(false));
    dispatch(deleteBoard(state.selectedBoard));
  };

  const handleClickDelete = (board: Board) => {
    localDispatch(newVisibleState(true));
    localDispatch(newBoardSelected(board));
  };

  const handleClickBlurModale = (e: any) =>
    e.target.classList.contains("modale") &&
    localDispatch(newVisibleState(false));

  useEffect(() => {
    if (!token) history.push("/");
    else if (!all) dispatch(getBoards());
  }, [token]);

  return (
    <div className="dashboard">
      <div className="dashboard-block">
        <h2>Mes tableaux</h2>
        <div className="dashboard-container">
          <AllBoards handleClickDelete={handleClickDelete} />
          <CreateButton state={state} localDispatch={localDispatch} />
        </div>
      </div>
      {state.isVisible && (
        <Modale
          title={title}
          content={content}
          handleClickBackButton={handleClickBackButton}
          handleClickNextButton={handleClickNextButton}
          handleClickBlurModale={handleClickBlurModale}
        />
      )}
    </div>
  );
};

export default Dashboard;

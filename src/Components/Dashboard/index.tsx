import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import { deleteBoard, getBoards } from "../../Store/Tabs/actions";
import "./style.scss";
import AllBoards from "./AllBoards";
import CreateButton from "./CreateButton";
import Modale from "../Modale";
import { Board } from "../../Store/Tabs/types";

const title = "Êtes vous sûre ?";
const content =
  "Cette action est définitive et aucun retour en arrière n'est possible.";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const [isVisible, setVisible] = useState(false);
  const [boardSelected, setBoardSelected] = useState<any>({});

  const handleClickBackButton = () => setVisible(false);

  const handleClickNextButton = () => {
    setVisible(false);
    dispatch(deleteBoard(boardSelected));
  };

  const handleClickDelete = (board: Board) => {
    setVisible(true);
    setBoardSelected(board);
  };

  useEffect(() => {
    if (!token) history.push("/");
    else dispatch(getBoards());
  }, [token]);

  return (
    <div className="dashboard">
      <div className="dashboard-block">
        <h2>Mes tableaux</h2>
        <div className="dashboard-container">
          <AllBoards handleClickDelete={handleClickDelete} />
          <CreateButton />
        </div>
      </div>
      {isVisible && (
        <Modale
          title={title}
          content={content}
          handleClickBackButton={handleClickBackButton}
          handleClickNextButton={handleClickNextButton}
          setVisible={setVisible}
        />
      )}
    </div>
  );
};

export default Dashboard;

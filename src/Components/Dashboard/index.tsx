import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import { getBoards } from "../../Store/Tabs/actions";
import "./style.scss";
import AllBoards from "./Boards";
import CreateButton from "./CreateButton";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!token) history.push("/");
    else dispatch(getBoards());
  }, [token]);

  return (
    <div className="dashboard">
      <div className="dashboard-block">
        <h2>Mes tableaux</h2>
        <div className="dashboard-container">
          <AllBoards />
          <CreateButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

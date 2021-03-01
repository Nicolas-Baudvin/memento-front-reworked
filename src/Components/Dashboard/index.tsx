import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import { getBoards } from "../../Store/Tabs/actions";
import "./style.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);
  const { all } = useSelector((state: RootState) => state.boards);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/");
    } else {
      dispatch(getBoards());
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-block">
        <h2>Mes tableaux</h2>
        <div className="dashboard-tabs">
          {
            all && all.map((board) => <div className="dashboard-tabs__item">
              <img src={board.image} alt="board" />
              <h3> {board.name} </h3>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import "./style.scss";

const Dashboard = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
        history.push("/");
    }
  }, [token]);
  return (
    <div className="dashboard">
      <div className="dashboard-tabs">
        <h2>Mes tableaux</h2>
      </div>
    </div>
  );
};

export default Dashboard;

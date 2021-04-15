import { useHistory } from "react-router";

const NoBoardAvailable = () => {
    const history = useHistory();

    return (
        <div className="noboard">
          <div className="currentboard-error">
            Vous ne possédez pas de tableau avec ce nom
          </div>
          <button onClick={() => history.push("../dashboard")} className="button">Dashboard</button>
        </div>
      )
};

export default NoBoardAvailable;
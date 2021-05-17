import { useHistory } from "react-router-dom";
import "./style.scss";

const Home = () => {
  const history = useHistory();

  const handleClickStart = () => {
    history.push("/inscription");
  };
  return (
    <main className="home">
      <div className="home-text">
        <h1>Simple, Efficace & Professionnel</h1>
        <h2>
          Organisez-vous grâce à notre système de liste de tâche en temps réel.
        </h2>
        <button onClick={() => handleClickStart()} className="home-button">
          Commencer l'aventure
        </button>
        <img src={`${process.env.PUBLIC_URL}/img/todo-home.svg`} alt="logo" />
      </div>
    </main>
  );
};

export default Home;

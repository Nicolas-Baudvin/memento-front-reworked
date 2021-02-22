import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import cx from "classnames";
import "./style.scss";

const Header = () => {
  const history = useHistory();
  const [selected, setSelected] = useState("/");

  const handleClickNav = (pathname: string) => {
    history.push(pathname);
    setSelected(pathname);
  };

  useEffect(() => {
    console.log(history.location.pathname);
  }, [history]);

  return (
    <header>
      <div onClick={() => handleClickNav("/")} className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/img/Logo.png`}
          alt="Logo My Memento"
        />
        <h1>My Memento</h1>
      </div>

      <nav>
        <button
          className={cx("new", { selected: selected === "nouveautes" })}
          onClick={() => handleClickNav("nouveautes")}
        >
          Nouveautés
        </button>

        <button
          className={cx("login", { selected: selected === "connexion" })}
          onClick={() => handleClickNav("connexion")}
        >
          Connexion
        </button>

        <button
          className={cx("signup", { selected: selected === "inscription" })}
          onClick={() => handleClickNav("inscription")}
        >
          Inscription
        </button>
      </nav>
    </header>
  );
};

export default Header;

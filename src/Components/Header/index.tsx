import { useState } from "react";
import { useHistory } from "react-router-dom";
import cx from "classnames";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/reducer";
import { logout } from "../../Store/UserData/actions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);
  const [selected, setSelected] = useState("/");

  const handleClickNav = (pathname: string) => {
    history.push(pathname);
    setSelected(pathname);
  };

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
          onClick={() => handleClickNav("../nouveautes")}
        >
          Nouveautés
        </button>

        {!token && (
          <>
            <button
              className={cx("login", { selected: selected === "connexion" })}
              onClick={() => handleClickNav("../connexion")}
            >
              Connexion
            </button>

            <button
              className={cx("signup", { selected: selected === "inscription" })}
              onClick={() => handleClickNav("../inscription")}
            >
              Inscription
            </button>
          </>
        )}
        {token && (
          <>
            <button
              className={cx("login", { selected: selected === "connexion" })}
              onClick={() => handleClickNav("../dashboard")}
            >
              Dashboard
            </button>

            <button
              className={cx("signup", { selected: selected === "inscription" })}
              onClick={() => dispatch(logout())}
            >
              Déconnexion
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

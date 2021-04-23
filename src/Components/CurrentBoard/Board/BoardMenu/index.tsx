import { slide as Menu } from "react-burger-menu";
import styles from "../../utils/style";

const BoardMenu = () => {
  return (
    <Menu menuClassName="menu" styles={styles}>
      <a href="" className="menu-item">
        Créer une liste
      </a>
      <a href="" className="menu-item">
        Paramètres du tableau
      </a>
      <a href="" className="menu-item">
        Supprimer le tableau
      </a>
    </Menu>
  );
};

export default BoardMenu;

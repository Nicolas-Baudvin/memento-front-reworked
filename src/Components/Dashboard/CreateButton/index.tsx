import { useState } from "react";
import CreateBoards from "../CreateBoards";
import cx from "classnames";

const CreateButton = () => {
      const [isShow, setShow] = useState(false);

      const handleClickCreateBoard = () => setShow(!isShow);
    return (
      <div className="dashboard-create">
        <div
          onClick={handleClickCreateBoard}
          className={cx("dashboard-create-add", {
            "dashboard-create-hide": isShow,
          })}
        >
          <img
            className="dashboard-create-plus"
            src={`${process.env.PUBLIC_URL}/img/plus.svg`}
            alt="Ajouter un tableau"
          />
          <p>Ajouter</p>
        </div>
        <CreateBoards setShow={setShow} isShow={isShow} />
      </div>
    );
};

export default CreateButton;
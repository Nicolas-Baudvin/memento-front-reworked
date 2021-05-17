import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../Store/reducer";
import { Board as BoardType } from "../../../Store/Tabs/types";

interface AllBoardsProps {
  handleClickDelete: Function;
}

const AllBoards = ({ handleClickDelete }: AllBoardsProps) => {
  const { all } = useSelector((state: RootState) => state.boards);
  const history = useHistory();

  const handleClickBoard = (title: string) => {
    history.push(`/tableaux/${title}`);
  };

  return (
    <div className="dashboard-boards">
      {all &&
        all.map((board: BoardType, i: number) => (
          <div key={i} className="dashboard-boards__item">
            <img
              className="delete"
              src={`${process.env.PUBLIC_URL}/img/remove.svg`}
              width="20px"
              height="20px"
              alt="supprimer"
              onClick={() => handleClickDelete(board)}
            />
            <div
              onClick={() => handleClickBoard(board.title)}
              className="dashboard-boards__item--container"
            >
              <img src={board.image.url} alt={board.image.alt} />
            </div>
            <div
              onClick={() => handleClickBoard(board.title)}
              className="dashboard-boards__item--texts"
            >
              <p>{board.owner.username.substring(0, 1)}</p>
              <div>
                <h3> {board.title} </h3>
                <div className="dashboard-boards__item--owner">
                  {board.owner.username}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllBoards;

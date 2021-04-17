import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../Store/reducer";

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
        all.map((board, i) => (
          <div
            onClick={() => handleClickBoard(board.title)}
            key={i}
            className="dashboard-boards__item"
          >
            <div className="dashboard-boards__item--container">
              <img
                className="delete"
                src={`${process.env.PUBLIC_URL}/img/remove.svg`}
                width="20px"
                height="20px"
                alt="supprimer"
                onClick={() => handleClickDelete(board)}
              />
              <img src={board.image.url} alt={board.image.alt} />
            </div>
            <div className="dashboard-boards__item--texts">
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

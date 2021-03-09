import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";

interface AllBoardsProps {
  handleClickDelete: Function;
}

const AllBoards = ({ handleClickDelete }: AllBoardsProps) => {
  const { all } = useSelector((state: RootState) => state.boards);

  return (
    <div className="dashboard-boards">
      {all &&
        all.map((board, i) => (
          <div key={i} className="dashboard-boards__item">
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

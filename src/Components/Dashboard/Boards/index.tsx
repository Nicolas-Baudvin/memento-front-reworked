import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";

const AllBoards = () => {
  const { all } = useSelector((state: RootState) => state.boards);
  console.log(all);
  return (
    <div className="dashboard-boards">
      {all &&
        all.map((board, i) => (
          <div key={i} className="dashboard-boards__item">
            <div className="dashboard-boards__item--container">
              <img src={board.image.url} alt={board.image.alt} />
            </div>
            <h3> {board.title} </h3>
            <p>{board.owner.username.substring(0,2)}</p>
          </div>
        ))}
    </div>
  );
};

export default AllBoards;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { RootState } from "../../Store/reducer";
import { getBoards, newCurrentBoard } from "../../Store/Tabs/actions";
import { logout } from "../../Store/UserData/actions";
import './style.scss';

const CurrentBoard = () => {
  const params: { tabTitle: string } = useParams();
  const history = useHistory();
  const { all, current } = useSelector((state: RootState) => state.boards);
  const { token } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (all) {
      const currentBoard = all?.find(
        (board) => board.title === params.tabTitle
      );
      if (currentBoard) dispatch(newCurrentBoard(currentBoard));
    } else {
      if (token) {
        dispatch(getBoards());
      } else {
        dispatch(logout());
        history.push("/");
      }
    }
  }, [all, params]);
  return (
    <div className="currentboard">
      {!current && (
        <>
          <div className="currentboard-error">
            Vous ne possédez pas de tableau avec ce nom
          </div>
          <button onClick={() => history.push("../dashboard")} className="button">Dashboard</button>
        </>
      )}
    </div>
  );
};

export default CurrentBoard;

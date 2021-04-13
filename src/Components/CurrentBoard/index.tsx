import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { RootState } from "../../Store/reducer";
import { getBoards, newCurrentBoard } from "../../Store/Tabs/actions";

const CurrentBoard = () => {
  const params: { tabTitle: string } = useParams();
  const history = useHistory();
  const { all } = useSelector((state: RootState) => state.boards);
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
      }
      else {
          history.push("/");
      }
    }
  }, [all, params]);
  return <div className="currentboard"></div>;
};

export default CurrentBoard;

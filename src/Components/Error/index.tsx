import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { hideError } from "../../Store/Error/actions";
import { RootState } from "../../Store/reducer";

import "./style.scss";

const Error = () => {
    const dispatch = useDispatch();
  const { isShow, message } = useSelector((state: RootState) => state.error);

  const handleClick = () => dispatch(hideError());

  return (
    <div
      className={cx("error", { "error-show": isShow, "error-hide": !isShow })}
      onClick={handleClick}
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/info.svg`}
        alt="Information icone"
      />
      {message}
    </div>
  );
};

export default Error;

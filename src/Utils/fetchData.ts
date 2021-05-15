import axios from "axios";
import { throwNewError } from "../Store/Message/actions";
import { logout } from "../Store/UserData/actions";

const fetchData = async (opts: any) => {
  const { headers, ...rest } = opts;
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        ...rest,
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          ...headers,
        },
      });
      return resolve(res.data);
    } catch (error) {
        return reject(error);
    }
  });
};

export const errorHandler = (error: any, dispatch: any, isJwt = false) => {
  if (error?.response?.status === 403 && isJwt) dispatch(logout());
  if (error?.response?.data?.error)
    dispatch(throwNewError(error.response.data.error));
  else if (error?.response?.data?.errors)
    dispatch(throwNewError(error.response.data.errors[0].msg));
  else dispatch(throwNewError("Une erreur est survenue avec le serveur."));
};

export default fetchData;

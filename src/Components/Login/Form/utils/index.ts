import { LoginFormErrors, UserDatas } from "../types";

const checkLoginFields = (userDatas: UserDatas): LoginFormErrors => {
  const { email, password } = userDatas;
  let errors = {
    email: "",
    password: "",
  };
  if (!email) errors.email = "Ce champs est obligatoire !";
  if (!password) errors.password = "Ce champs est obligatoire";

  return errors;
};

export default checkLoginFields;

export const isEmailValid = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isPasswordValid = (password: string) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(String(password));
};

export const isPasswordsAreEqual = (password: string, confPass: string) =>
  password === confPass;

export const isUsernameValid = (username: string) => {
  const re = /^[a-zA-Z0-9]{3,20}$/;
  return re.test(String(username));
}

const checkFields = (datasToCheck: DatasToCheck) => {
  const { password, email, confPass, username } = datasToCheck;
  let result: FormErrors = {
    email: "",
    password: "",
    confPass: "",
    username: ""
  };
  if (!isEmailValid(email))
    result.email = "L'email est invalide";
  if (!isPasswordValid(password))
    result.password =
      "Le mot de passe est invalide, il doit contenir au moins un nombre, une minuscule, une majuscule et doit faire 8 caractères minium";
  if (!isPasswordsAreEqual(password, confPass))
    result.confPass = "Les mots de passe sont différents";
  if (!isUsernameValid(username))
    result.username = "Le pseudonyme ne doit pas contenir de caractères spéciaux"
  return result;
};

export interface DatasToCheck {
  email: string;
  password: string;
  confPass: string;
  username: string;
}

export interface FormErrors {
  email: string;
  password: string;
  confPass: string;
  username: string;
}

export default checkFields;

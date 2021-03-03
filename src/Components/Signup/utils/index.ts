import { InputName } from "../../Login/Form/types";

const inputs: Array<InputArrayProps> = [
  {
    type: "email",
    label: "Email",
    placeholder: "exemple@gmail.com",
    tooltip: "L'email doit être valide",
    htmlFor: "email",
  },
  {
    type: "password",
    label: "Mot de passe",
    placeholder: "••••••••",
    tooltip: "Le mot de passe doit contenir 8 caractères minimum, 1 minuscule, 1 majuscule, 1 chiffre",
    htmlFor: "password",
  },
  {
    type: "password",
    label: "Confirmez le mot de passe",
    placeholder: "••••••••",
    tooltip: "Les mots de passe doivent être identiques",
    htmlFor: "confPass",
  },
  {
    type: "username",
    label: "Pseudonyme",
    placeholder: "PetitHeron85",
    tooltip: "Le pseudonyme doit faire 20 caractères maximum.",
    htmlFor: "username"
  }
];

export interface InputArrayProps {
    type: string;
    label: string;
    placeholder: string;
    tooltip: string;
    htmlFor: InputName;
}

export default inputs
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
    tooltip: "Le mot de passe doit contenir 8 caractères minimum",
    htmlFor: "password",
  },
  {
    type: "password",
    label: "Confirmez le mot de passe",
    placeholder: "••••••••",
    tooltip: "Les mots de passe doivent être identiques",
    htmlFor: "confPass",
  },
];

export interface InputArrayProps {
    type: string;
    label: string;
    placeholder: string;
    tooltip: string;
    htmlFor: string;
}

export default inputs
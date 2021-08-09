import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const mainRoutes = [
  {
    name: "Phonebook",
    path: "/",
    component: "",
    exact: false,
  },
  {
    name: "Registration",
    path: "/registration",
    component: RegisterPage,
    exact: false,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
    exact: false,
  },
];

export default mainRoutes;

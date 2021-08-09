import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PhonebookPage from "../pages/PhonebookPage";
import RegisterPage from "../pages/RegisterPage";

export const mainRoutes = {
  authentication: {
    register: {
      name: "Register",
      path: "/register",
      component: RegisterPage,
      exact: false,
      redirectTo: "/contacts",
    },
    login: {
      name: "Login",
      path: "/login",
      component: LoginPage,
      exact: false,
      redirectTo: "/contacts",
    },
  },
  homepage: {
    name: "Homepage",
    path: "/",
    component: HomePage,
    exact: true,
  },
  phonebook: {
    name: "Phonebook",
    path: "/contacts",
    component: PhonebookPage,
    exact: false,
    redirectTo: "/",
  },
};

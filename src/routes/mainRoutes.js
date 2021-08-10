import { lazy } from "react";

export const mainRoutes = {
  auth: [
    {
      name: "Register",
      path: "/register",
      component: lazy(() =>
        import("../pages/RegisterPage" /* webpackChunkName: 'RegisterPage' */)
      ),
      exact: false,
      redirectTo: "/contacts",
      private: false,
      restricted: true,
    },
    {
      name: "Login",
      path: "/login",
      component: lazy(() =>
        import("../pages/LoginPage" /* webpackChunkName: 'LoginPage' */)
      ),
      exact: false,
      redirectTo: "/contacts",
      private: false,
      restricted: true,
    },
  ],
  homepage: {
    name: "Homepage",
    path: "/",
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: 'HomePage' */)
    ),
    exact: true,
  },
  phonebook: {
    name: "Phonebook",
    path: "/contacts",
    component: lazy(() =>
      import("../pages/PhonebookPage" /* webpackChunkName: 'PhonebookPage' */)
    ),
    exact: false,
    redirectTo: "/",
  },
  resetHomeUrl: {
    path: "/goit-react-hw-08-phonebook",
    redirectTo: "/",
  },
};

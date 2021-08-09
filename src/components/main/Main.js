import { Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "../privateRoute/PrivateRoute";
import PublicRoute from "../publicRoute.js/PublicRoute";
import { mainRoutes } from "../../routes/mainRoutes";

const HomePage = lazy(() => import("../../pages/HomePage"));
const PhonebookPage = lazy(() => import("../../pages/PhonebookPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <PublicRoute
            path={mainRoutes.homepage.path}
            component={HomePage}
            exact={mainRoutes.homepage.exact}
          />
          <PrivateRoute
            path={mainRoutes.phonebook.path}
            component={PhonebookPage}
            redirectTo={mainRoutes.phonebook.redirectTo}
            exact={mainRoutes.phonebook.exact}
          />

          <PublicRoute
            path={mainRoutes.authentication.register.path}
            component={RegisterPage}
            exact={mainRoutes.authentication.register.exact}
            restricted
            redirectTo={mainRoutes.authentication.register.redirectTo}
          />
          <PublicRoute
            path={mainRoutes.authentication.login.path}
            component={LoginPage}
            exact={mainRoutes.authentication.login.exact}
            restricted
            redirectTo={mainRoutes.authentication.register.redirectTo}
          />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;

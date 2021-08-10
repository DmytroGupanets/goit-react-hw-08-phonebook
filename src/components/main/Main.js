import { Switch } from "react-router-dom";
import { Suspense } from "react";
import PrivateRoute from "../privateRoute/PrivateRoute";
import PublicRoute from "../publicRoute.js/PublicRoute";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <PublicRoute
            path={mainRoutes.homepage.path}
            component={mainRoutes.homepage.component}
            exact={mainRoutes.homepage.exact}
          />
          <PrivateRoute
            path={mainRoutes.phonebook.path}
            component={mainRoutes.phonebook.component}
            redirectTo={mainRoutes.phonebook.redirectTo}
            exact={mainRoutes.phonebook.exact}
          />
          {mainRoutes.auth.map((el) => (
            <PublicRoute
              key={el.path}
              path={el.path}
              component={el.component}
              exact={el.exact}
              restricted={el.restricted}
              redirectTo={el.redirectTo}
            />
          ))}
          <PrivateRoute
            path={mainRoutes.resetHomeUrl.path}
            redirectTo={mainRoutes.resetHomeUrl.redirectTo}
            restricted
          />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;

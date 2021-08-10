import { Switch } from "react-router-dom";
import { Suspense } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import PublicRoute from "../../routes/PublicRoute";
import PrivateRoute from "../../routes/PrivateRoute";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            )
          )}

          <PrivateRoute
            path="/goit-react-hw-08-phonebook"
            redirect="/"
            restricted
          />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;

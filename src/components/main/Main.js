import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import { Route, Switch } from "react-router-dom";
import PhonebookPage from "../../pages/PhonebookPage";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/contacts" component={PhonebookPage} exact={false} />
        <Route path="/register" component={RegisterPage} exact={true} />
        <Route path="/login" component={LoginPage} exact={true} />
      </Switch>
    </main>
  );
};

export default Main;

import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const App = () => {
      return (
            <Layout>
                  <Switch>
                        <Route exact path="/">
                              <AllMeetups />
                        </Route>
                        <Route path="/new-meetup">
                              <NewMeetup />
                        </Route>
                        <Route path="/favorites">
                              <Favorites />
                        </Route>
                  </Switch>
            </Layout>
      );
};

export default App;

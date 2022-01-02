import { Route, Switch } from 'react-router-dom';

// Page Imports
import Broken from './pages/404/404';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import SignUp from './pages/sign-up/SignUp';
import UserAccount from './pages/user-account/UserAccount';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          component={Landing}
        </Route>
        <Route path="/404">
          component={Broken}
        </Route>
        <Route path="/home">
          component={Home}
        </Route>
        <Route path="/sign-up">
          component={SignUp}
        </Route>
        <Route path="/account">
          component={UserAccount}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

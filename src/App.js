import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// Page Imports
import Broken from './pages/404/404';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NewUser from './pages/new-user/NewUser';
import ReturningUser from './pages/returning-user/ReturningUser';
import UserAccount from './pages/user-account/UserAccount';

function App() {
  const [data, setData] = useState([])

  // http://dev.socrata.com/foundry/data.cdc.gov/9mfq-cb36 (CDC api docs)
  const API_URL = 'https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=2022-01-11T00:00:00.000'

  const getData = async () => {
    const response = await fetch(API_URL);
    console.log(response, 'is response')
    const data = await response.json();
    console.log(data)
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);


  const loading = () => {
    return (
      <div>Loading...</div>
    )
  }

  const loaded = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/404">
          <Broken />
        </Route>
        <Route path="/home">
          <Home data={data} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <NewUser />
        </Route>
        <Route path="/login">
          <ReturningUser />
        </Route>
        <Route path="/account">
          <UserAccount />
        </Route>
      </Switch>
    )
  }

  return (
    <div className="App">
      {data.length > 0 ? loaded() : loading()}
    </div>
  );
}

export default App;

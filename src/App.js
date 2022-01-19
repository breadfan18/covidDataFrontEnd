import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth } from './services/firebase';

// Custom Component Imports
import TitleAnnouncer from './components/titleAnnouncer/TitleAnnouncer';

// Page Imports
import Broken from './pages/404/404';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NewUser from './pages/new-user/NewUser';
import ReturningUser from './pages/returning-user/ReturningUser';
import UserAccount from './pages/user-account/UserAccount';
import Header from './components/header/Header';


function App() {
  const [data, setData] = useState([])
  const [ user, setUser ] = useState(null);

  // http://dev.socrata.com/foundry/data.cdc.gov/9mfq-cb36 (CDC api docs)
  const API_URL = 'https://data.cdc.gov/resource/9mfq-cb36.json'

  const getData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data, 'is data')
    setData(data);
  }

  useEffect(() => {
    getData();
    auth.onAuthStateChanged(user => setUser(user))
  }, []);


  const loading = () => {
    return (
      <div>Loading...</div>
    )
  }

  const loaded = () => {
    return (
      <div>
        <TitleAnnouncer />
        <Helmet>
          <title>Covid NoTp Tracker</title>
        </Helmet>
        <Header user={user}/>
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
            <UserAccount googleuser={user}/>
          </Route>
        </Switch>
      </div>
    )
  }

  return (
    <div className="App">
      {data.length > 0 ? loaded() : loading()}
    </div>
  );
}

export default App;

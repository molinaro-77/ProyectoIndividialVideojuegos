import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import Details from './components/Details/Details';
import GameInputForm from './components/GameInputForm/GameInputForm';
import NotFoundException from './components/NotFoundException/NotFoundException';

import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' render={()=><LandingPage/>} />
        <Route path='/home' render={()=><HomePage/>} />
        <Route path='/details/:id' render={({match}) => <Details match={match}/>}/>
        <Route path='/create' render={()=><GameInputForm/>}/>
        <Route component={NotFoundException}/>
      </Switch>
    </div>
  );
}

export default App;

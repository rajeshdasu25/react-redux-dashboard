import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { AppRoutes } from './config/routes';

import AppHeader from './components/common/AppHeader';
import Footer from './components/common/Footer';
import LeftNav from './components/common/LeftNav';

import Contact from './components/contact';
import ViewAllCategories from './components/categories/viewAllCategories';
import ViewIndCategory from './components/categories/viewIndCategory';
import ViewIndProduct from './components/products/viewIndProduct';
import Dashboard from './components/dashboard';
import Users from './components/users/viewAllUsers';
import Products from './components/products';
import Queries from './components/queries/viewAllQueries';
import Login from './components/login/';
import UserProfile from './components/login/profile';

import './App.css';
import './Layout.scss';

function App() {
  const [leftOpen, setLeftOpen] = useState('open');

  const toggleSidebar = (event) => {
    //let key = `${event.currentTarget.parentNode.id}Open`;
    if(leftOpen === 'open') setLeftOpen('closed');
    else setLeftOpen('open');
  }

  return (
    <div className='App' id='layout'>
      {/*<AppHeader />
      <div className="container-fluid">
        <div className="row content">
          <div className="leftmenu-container">
            <LeftNav />
          </div>
          <div className="main-container text-left">
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={UserProfile} />
              <Route path='/users' component={Users} />
              <Route path='/contact' component={Contact} />
              <Route path='/categories' component={ViewAllCategories} />
              <Route path='/category/:id' component={ViewIndCategory} />
              <Route path='/products' component={Products} />
              <Route path='/product/:id' component={ViewIndProduct} />
              <Route path='/queries' component={Queries} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />*/}
      <div id='left' className={leftOpen}>
        <div className='icon' onClick={toggleSidebar}>&equiv;</div>
        <div className={`sidebar ${leftOpen}`} >
          <div className='header'>React Dashboard</div>
          <div className='content'>
            <LeftNav />
          </div>
        </div>
      </div>
      <div id='main'>
        <div className='header'>
          <AppHeader />
        </div>
        <div className='content main-container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={UserProfile} />
            <Route path='/users' component={Users} />
            <Route path='/contact' component={Contact} />
            <Route path='/categories' component={ViewAllCategories} />
            <Route path='/category/:id' component={ViewIndCategory} />
            <Route path='/products' component={Products} />
            <Route path='/product/:id' component={ViewIndProduct} />
            <Route path='/queries' component={Queries} />
          </Switch>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { AppRoutes } from './config/routes';

import AppHeader from './components/common/AppHeader';
import Footer from './components/common/Footer';
import LeftNav from './components/common/LeftNav';

import Contact from './components/contact';
import ViewAllCategories from './components/categories/viewAllCategories';
import Dashboard from './components/dashboard';
import Users from './components/users';
import Products from './components/products';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="container-fluid">
        <div className="row content">
          <div className="leftmenu-container">
            <LeftNav />
          </div>
          <div className="main-container text-left">
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/users' component={Users} />
              <Route path='/contact' component={Contact} />
              <Route path='/categories' component={ViewAllCategories} />
              <Route path='/products' component={Products} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

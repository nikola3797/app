import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './components/Auth/Auth';
import Registration from './components/Registration/Registration';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/login" component={Auth} />
        <Route path="/registration" component={Registration} />
      </Switch>
    );

    
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;

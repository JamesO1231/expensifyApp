import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={ExpenseDashboardPage} exact={true} />
          <Route path='/create' component={AddExpensePage} /> 
          <Route path='/edit' component={EditExpensePage} /> 
          <Route path='/help' component={HelpExpensePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
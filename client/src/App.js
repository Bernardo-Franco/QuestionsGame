import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Auth from './components/Auth/Auth';
import {Start} from './components/Start/Start';

const App = () => {
  

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/game" exact component={Form} />  
          <Route path="/auth" exact component={Auth}  />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;

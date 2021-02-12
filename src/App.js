import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } 
from "react-router-dom";

// komponen halaman
import Registrasi from './pages/registrasi';
import Login from './pages/login';
import LupaPassword from './pages/lupa-password';
import NotFound from './pages/not-found';
import Private from "./pages/private";


function App() {
  return (
    <Router>
      <Switch>
          <Route path={"pengaturan"} component={Private} />
          <Route path={"/registrasi"} component={Registrasi} />
          <Route path={"/login"} component={Login} />
          <Route path={"/lupa-password"} component={LupaPassword} />
          <Route component={NotFound} />
      </Switch>
    </Router>
    
  );
}

export default App;

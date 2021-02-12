import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } 
from "react-router-dom";

// komponen halaman
import Registrasi from './pages/registrasi';
import Login from './pages/login';
import LupaPassword from './pages/lupa-password';
import NotFound from './pages/not-found';
import Private from "./pages/private";
import PrivateRoute from "./components/privateRoute";
import FirebaseProvider from './components/firebaseProvider';

//komponent material-ui
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { CssBaseline } from '@material-ui/core';


function App() {
  return (
    <>
    <CssBaseline/>
    <FirebaseProvider>
    <Router>
      <Switch>
          <PrivateRoute path={"/"} exact component={Private}/>
          <PrivateRoute path={"/pengaturan"} component={Private} />
          <PrivateRoute path={"/produk"} component={Private} />
          <PrivateRoute path={"/transaksi"} component={Private}/>
          <Route path={"/registrasi"} component={Registrasi} />
          <Route path={"/login"} component={Login} />
          <Route path={"/lupa-password"} component={LupaPassword} />
          <Route component={NotFound} />
      </Switch>
    </Router>
    </FirebaseProvider>
    </>
  );
}

export default App;

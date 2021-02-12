import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Pengguna from "./pengguna";
import Toko from "./toko";

function Pengaturan(){
    return(
        <Switch>
            <Route component={Pengguna} path={"/pengaturan/pengguna"} />
            <Route component={Toko} path={"/pengaturan/toko"} />
        </Switch>
    )
}

export default Pengaturan;
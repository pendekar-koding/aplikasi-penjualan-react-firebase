import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pengaturan from "./pengaturan";

function Private() {
    return(
        <Switch>
            <Route path={"/pengaturan"} component={Pengaturan}/>
        </Switch>
    )
}

export default Private;
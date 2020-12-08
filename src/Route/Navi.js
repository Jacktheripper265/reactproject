import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {ULogin} from '../component/Login';
import { SignUp } from '../component/SignUp';
import { Box } from 'grommet';
import { adminHome } from '../component/adminHome';





export function Navi() {
  return (
    <Box height='100vh'>
    <Switch>
  <Route path="/Login" component={ULogin}></Route>
  <Route path="/Signup" component={SignUp}></Route>
  <Route path="/Admin" component={adminHome}></Route>
  </Switch>
  </Box>
  );
}

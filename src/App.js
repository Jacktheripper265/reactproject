import React from 'react';
import { Grommet, Footer, Box } from 'grommet';
import { AppBar, Collapsable } from './component/StartHeader';
import { SimpleFooter } from './component/StartFooter';
import { Navi } from './Route/Navi';

const theme = {
  global: {
    
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
   <Grommet theme={theme} full={true}>
   
    <Collapsable></Collapsable>
    <Navi></Navi>
   <SimpleFooter></SimpleFooter>
   </Grommet>
  );
}

export default App;

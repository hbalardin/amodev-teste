import React from 'react';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <>
      <Home />
      {/* eslint-disable-next-line */}
      {/* <p>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p> */}
      <GlobalStyle />
    </>
  );
};

export default App;

import React from 'react';
import Header from "./Header";
import Search from "./Search";
import Artists from "./Artists";

const AppContainer = () => {

  return (
      <React.Fragment>

        <Header/>

        <Search/>

        <Artists />

      </React.Fragment>
  )
};

export default AppContainer;
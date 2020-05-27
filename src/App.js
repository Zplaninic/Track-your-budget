import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {Income} from './components/Income'
import {Transactions} from './components/Transactions'
import {NewTransaction} from './components/NewTransaction'
import {GlobalProvider} from './context/GlobalState'

import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income /> 
        <NewTransaction />
        <Transactions />
      </div>
    </GlobalProvider>
  );
}

export default App;

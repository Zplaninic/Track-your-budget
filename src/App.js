import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {Income} from './components/Income'
import {Transactions} from './components/Transactions'
import {NewTransaction} from './components/NewTransaction'
import {GlobalProvider} from './context/GlobalState'
import {Graph} from './components/Graph'

import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <div className="container addTransactions-container">
        <Header />
        <Balance />
        <Income /> 
        <NewTransaction />
      </div>
      <div className="graphContainer">
        <Graph />
      </div>
      <div className="transaction-container">
        <Transactions />
      </div>
    </GlobalProvider>
  );
}

export default App;

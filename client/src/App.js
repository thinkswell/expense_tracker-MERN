import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Gross from "./components/Gross";
import TramsactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <div className="tracker">
          <Header />
          <Balance />
          <Gross />
          <TramsactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

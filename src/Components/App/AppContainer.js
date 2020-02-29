import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

function AppContainer() {
  const state = {
    message: "Hello"
  };

  return (
    <Store.Provider value={state}>
      <AppPresenter />
    </Store.Provider>
  );
}

export default AppContainer;

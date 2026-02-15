import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import App from "./App";
import ShopContextProvider from "./context/ShopContext";
import "../src/index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
          <ShopContextProvider>    <App /></ShopContextProvider>

  </PersistGate>
</Provider>
  </BrowserRouter>
);





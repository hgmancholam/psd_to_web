import React from "react";
import Header from "./components/header";
import History from "./components/history";
import Climb from "./components/climb";
import Footer from "./components/footer";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App   min-w-screen">
      <Header />
      <History />
      <Climb />
      <Footer />
    </div>
  );
}

export default App;

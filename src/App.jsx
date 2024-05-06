import "./App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <div className="main-content"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import "./sb-admin-2.min.css";

import Base from "./components/Base";
import DashBoard from "./components/Dashboard/DashBoard";
//? =>To install DOM-Router => npm i react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login";
import Tables from "./components/Tables/Tables";
import Cards from "./components/Custom-Components/Cards";
import Buttons from "./components/Custom-Components/Buttons";
import Colors from "./components/Utilities/Colors";
import Borders from "./components/Utilities/Borders";
import Animations from "./components/Utilities/Animations";
import Others from "./components/Utilities/Others";
import ForgetPassword from "./components/Pages/ForgetPassword";
import Register from "./components/Pages/Register";
import Page404 from "./components/Pages/404 Page";
import BlankPage from "./components/Pages/Blank_Page";
import Chart from "./components/Charts/Chart-2";

function App() {
  return (
    <div className="App">
    {/* ? BrowserRouter holds the all the Routes... */}
      <BrowserRouter>
        {/* ? Routes holds all the Route... */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          {/* ? Base is the parent Route... */}
          <Route path="/base" element={<Base />}>
            {/* ? These all are the children Route... */}
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="chart" element={<Chart />} />
            <Route path="tables" element={<Tables />} />
            <Route path="cards" element={<Cards />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="colors" element={<Colors />} />
            <Route path="borders" element={<Borders />} />
            <Route path="animations" element={<Animations />} />
            <Route path="other" element={<Others />} />
            <Route path="page404" element={<Page404 />} />
            <Route path="blankpage" element={<BlankPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
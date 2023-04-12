import React from "react";
import TopNavBar from "./Navbars/TopNavBar";
import SideBar from "./Navbars/SideBar";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <>
      {/*Page Wrapper*/}
      <div id="wrapper">
        <SideBar />
        {/* ---------------------------*/}
        {/*Content Wrapper*/}
        <div id="content-wrapper" class="d-flex flex-column">
          {/*Main Content*/}
          <div id="content">
            <TopNavBar />
            {/* ---------------------------*/}
            {/*Begin Page Content*/}
            {/* start container-fluid*/}
            <div class="container-fluid bg-color">
              {/* outlet holds all the children components... */}
              <Outlet></Outlet>
            </div>
            {/*End container-fluid*/}
            {/* ---------------------------*/}
            {/*End Main Content*/}
          </div>
          {/* ---------------------------*/}
          {/*Footer*/}
          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/*End of Footer*/}

          {/* --------------------------------------------- */}
          {/*End Content Wrapper*/}
        </div>

        {/*End of Wrapper*/}
      </div>
    </>
  );
};

export default Base;
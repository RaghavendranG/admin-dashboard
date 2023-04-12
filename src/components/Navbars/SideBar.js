import {
    faCog,
    faLaughWink,
    faScrewdriverWrench,
    faTachometerAlt,
    faFolderBlank,
    faChartArea,
    faTable,
    faCaretDown,
    faCaretRight,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  
  function SideBar() {
    //? Hooks state...
    const [components_visible, setcomponents_visible] = useState(false);
    const [utilities_visible, setutilities_visible] = useState(false);
    const [pages_visible, setpages_visible] = useState(false);
    // -------------------------------------------------------------------------------------
    return (
      <>
        {/*Sidebar*/}
        <ul
          className="navbar-nav sidebar-color sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/*Sidebar - Brand*/}
          <Link
            class="sidebar-brand d-flex align-items-center justify-content-center"
            to="dashboard"
          >
            <div class="sidebar-brand-icon rotate-n-15">
              <FontAwesomeIcon className="sb-admin-icon" icon={faLaughWink} />
            </div>
            <div class="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </Link>
          {/* ---------------------------*/}
          {/*Divider*/}
          <hr class="sidebar-divider my-0" />
          {/* ---------------------------*/}
          {/*Nav Item - Dashboard*/}
          <li class="nav-item active">
            <Link class="nav-link" to="dashboard">
              <FontAwesomeIcon className="sidebar-icon" icon={faTachometerAlt} />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* ---------------------------*/}
          {/*Divider*/}
          <hr class="sidebar-divider" />
          {/* ---------------------------*/}
          {/*Heading*/}
          <div class="sidebar-heading">Interface</div>
  
          {/*Nav Item - Pages Collapse Menu*/}
          {/* -------------------------------------------------------------    */}
          <li class="nav-item">
            <button
              onClick={() => setcomponents_visible(!components_visible)}
              className={components_visible ? "nav-link" : "nav-link"}
              // data-toggle="collapse"
              data-target="#collapseTwo"
              aria-controls="collapseTwo"
              aria-expanded={components_visible}
              style={{ border: "none", background: "none" }}
            >
              <FontAwesomeIcon className="sidebar-icon" icon={faCog} />
              <span>components</span>
              <FontAwesomeIcon
                icon={components_visible ? faCaretDown : faCaretRight}
                className="right-arrow"
              />
            </button>
            {/* ---------------------------*/}
            {/* sub items visible.... */}
            <div
              id="collapseTwo"
              className={components_visible ? "collapse show" : "collapse"}
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <Link className="collapse-item" to="/base/buttons">
                  Buttons
                </Link>
                <Link className="collapse-item" to="/base/cards">
                  Cards
                </Link>
              </div>
            </div>
          </li>
          {/* -------------------------------------------------------------*/}
          {/*Nav Item - Utilities Collapse Menu*/}
          <li class="nav-item">
            <button
              onClick={() => setutilities_visible(!utilities_visible)}
              class={utilities_visible ? "nav-link collapsed" : "nav-link"}
              // data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
              style={{ border: "none", background: "none" }}
            >
              <FontAwesomeIcon
                className="sidebar-icon"
                icon={faScrewdriverWrench}
              />
  
              <span>Utilities</span>
              <FontAwesomeIcon
                icon={utilities_visible ? faCaretDown : faCaretRight}
                className="right-arrow"
              />
            </button>
            {/* ---------------------------*/}
            {/* sub items visible.... */}
            <div
              id="collapseUtilities"
              className={utilities_visible ? "collapse show" : "collapse"}
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Utilities:</h6>
                <Link class="collapse-item" to="/base/colors">
                  Colors
                </Link>
                <Link class="collapse-item" to="/base/borders">
                  Borders
                </Link>
                <Link class="collapse-item" to="/base/animations">
                  Animations
                </Link>
                <Link class="collapse-item" to="/base/other">
                  Other
                </Link>
              </div>
            </div>
          </li>
          {/* -------------------------------------------------------------*/}
          {/* ---------------------------*/}
          {/*Divider*/}
          <hr class="sidebar-divider" />
          {/* ---------------------------*/}
          {/*Heading*/}
          <div class="sidebar-heading">Addons</div>
  
          {/*Nav Item - Pages Collapse Menu*/}
          <li class="nav-item">
            <button
              onClick={() => setpages_visible(!pages_visible)}
              className={pages_visible ? "nav-link " : "nav-link"}
              // href="#"
              // data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
              style={{ border: "none", background: "none" }}
            >
              <FontAwesomeIcon className="sidebar-icon" icon={faFolderBlank} />
              <span>Pages</span>
  
              <FontAwesomeIcon
                icon={pages_visible ? faCaretDown : faCaretRight}
                className="right-arrow"
              />
            </button>
            {/* ---------------------------*/}
            {/* sub items visible.... */}
            <div
              id="collapsePages"
              className={pages_visible ? "collapse show" : "collapse"}
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <Link class="collapse-item" to="/">
                  Login
                </Link>
                <Link class="collapse-item" to="/register">
                  Register
                </Link>
                <Link class="collapse-item" to="/forgotpassword">
                  Forgot Password
                </Link>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <Link class="collapse-item" to="/base/page404">
                  404 Page
                </Link>
                <Link class="collapse-item" to="/base/blankpage">
                  Blank Page
                </Link>
              </div>
            </div>
          </li>
          {/* -------------------------------------------------------------*/}
          {/*Nav Item - Charts*/}
          <li class="nav-item">
            <Link class="nav-link" to="/base/chart">
              <FontAwesomeIcon className="sidebar-icon" icon={faChartArea} />
              <span>Charts</span>
            </Link>
          </li>
          {/* -------------------------------------------------------------*/}
          {/*Nav Item - Tables*/}
          <li class="nav-item">
            <Link class="nav-link" to="tables">
              <FontAwesomeIcon className="sidebar-icon" icon={faTable} />
              <span>Tables</span>
            </Link>
          </li>
          {/* -------------------------------------------------------------*/}
          {/* ---------------------------*/}
          {/*Divider*/}
          <hr class="sidebar-divider d-none d-md-block" />
          {/* ---------------------------*/}
          {/*Sidebar Message*/}
        </ul>
        {/*End of Sidebar*/}
      </>
    );
  }
  
  export default SideBar;
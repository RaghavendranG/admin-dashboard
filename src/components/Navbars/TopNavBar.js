import {
    faBars,
    faBell,
    faCogs,
    faDonate,
    faEnvelope,
    faExclamationTriangle,
    faFileAlt,
    faList,
    faSearch,
    faSignOut,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  
  function TopNavBar() {
    //? hooks state...
  
    const [alert_visible, setalert_visible] = useState(false);
    const [inbox_visible, setinbox_visible] = useState(false);
    const [user_account_visible, setuser_account_visible] = useState(false);
    // -------------------------------------------------------------
    return (
      <nav class="navbar  navbar-expand navbar-light bg-dark topbar mb-4 static-top shadow">
        {/*Sidebar Toggle (Topbar)*/}
        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* ------------------------------------------------------------------------ */}
        {/*Topbar Search*/}
        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>
  
        {/*Topbar Navbar*/}
        <ul class="navbar-nav ml-auto">
          {/*Nav Item - Search Dropdown (Visible Only XS)*/}
          <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-search fa-fw"></i>
            </a>
            {/* ------------------------ */}
            {/*Dropdown - Messages*/}
            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* ------------------------------------------------------------------------ */}
          {/*Nav Item - Alerts*/}
          <li class="nav-item dropdown no-arrow mx-1">
            <button
              // ?  when button is clicked alert is true...
              onClick={() => setalert_visible(!alert_visible)}
              class={
                alert_visible
                  ? "nav-link dropdown-toggle"
                  : "nav-link dropdown-toggle"
              }
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup={alert_visible}
              aria-expanded="false"
              //?  style should be in jsx...
              style={{ border: "none", background: "none" }}
            >
              <FontAwesomeIcon icon={faBell} />
              {/*Counter - Alerts*/}
              <span class="badge badge-danger badge-counter">3+</span>
            </button>
            {/* ------------------------ */}
            {/*Dropdown - Alerts*/}
            {/* //? Dropdown toggle state... */}
            <div
              //?  when alert icon is clicked dropdown-list is shown
              //?  by setting the attribute value => "show" if alert is true...
              class={
                alert_visible
                  ? "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show"
                  : "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              }
              aria-labelledby="alertsDropdown"
            >
              <h6 class="dropdown-header">Alerts Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <FontAwesomeIcon icon={faDonate} />
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="fas fa-exclamation-triangle text-white"></i>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#">
                Show All Alerts
              </a>
            </div>
          </li>
          {/* ------------------------------------------------------------------------ */}
          {/*Nav Item - Messages*/}
          <li class="nav-item dropdown no-arrow mx-1">
            <button
              onClick={() => setinbox_visible(!inbox_visible)}
              class={
                inbox_visible
                  ? "nav-link dropdown-toggle"
                  : "nav-link dropdown-toggle"
              }
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup={inbox_visible}
              aria-expanded="false"
              style={{ border: "none", background: "none" }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {/*Counter - Messages*/}
              <span class="badge badge-danger badge-counter">7</span>
            </button>
            {/* ------------------------ */}
            {/*Dropdown - Messages*/}
            <div
              class={
                inbox_visible
                  ? "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show"
                  : "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              }
              aria-labelledby="messagesDropdown"
            >
              <h6 class="dropdown-header">Message Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg"
                    alt="404"
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div class="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_2.svg"
                    alt="404"
                  />
                  <div class="status-indicator"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div class="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_3.svg"
                    alt="404"
                  />
                  <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="404"
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't good...
                  </div>
                  <div class="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#">
                Read More Messages
              </a>
            </div>
          </li>
          {/* ------------------------------------------------------------------------ */}
          <div class="topbar-divider d-none d-sm-block"></div>
  
          {/*Nav Item - User Information*/}
          <li class="nav-item dropdown no-arrow">
            <button
              onClick={() => setuser_account_visible(!user_account_visible)}
              class={
                user_account_visible
                  ? "nav-link dropdown-toggle"
                  : "nav-link dropdown-toggle"
              }
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup={user_account_visible}
              aria-expanded="false"
              style={{ border: "none", background: "none" }}
            >
              <span class="mr-2 d-none d-lg-inline text-light-600 small">
                Raghavendran G
              </span>
              <img
                class="img-profile rounded-circle"
                src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
              />
            </button>
            {/* ------------------------ */}
            {/*Dropdown - User Information*/}
            <div
              class={
                user_account_visible
                  ? "dropdown-menu dropdown-menu-right shadow animated--grow-in show"
                  : "dropdown-menu dropdown-menu-right shadow animated--grow-in"
              }
              aria-labelledby="userDropdown"
            >
              <a class="dropdown-item" href="#">
                <FontAwesomeIcon className="user-account-icon" icon={faUser} />
                Profile
              </a>
              <a class="dropdown-item" href="#">
                <FontAwesomeIcon className="user-account-icon" icon={faCogs} />
                Settings
              </a>
              <a class="dropdown-item" href="#">
                <FontAwesomeIcon className="user-account-icon" icon={faList} />
                Activity Log
              </a>
              <div class="dropdown-divider"></div>
              <Link
                to="/"
                class="dropdown-item"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <FontAwesomeIcon className="user-account-icon" icon={faSignOut} />
                Logout
              </Link>
              {/* ------------------------------------------------------------------------ */}
              {/*Logout Modal*/}
              <div
                class="modal fade"
                id="logoutModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Ready to Leave?
                      </h5>
                      <button
                        class="close"
                        type="button"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Select "Logout" below if you are ready to end your current
                      session.
                    </div>
                    <div class="modal-footer">
                      <button
                        class="btn btn-secondary"
                        type="button"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <a class="btn btn-primary" href="login.html">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------ */}
            </div>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default TopNavBar;
import {
    faArrowRight,
    faBlog,
    faCheck,
    faExclamationTriangle,
    faFlag,
    faInfoCircle,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  
  const Buttons = () => {
    return (
      <div class="row">
        <div class="col-lg-6">
          {/*Circle Buttons*/}
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary d-sm-flex">
                Circle Buttons
              </h6>
            </div>
            <div class="card-body">
              <p>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>
              {/* <!-- Circle Buttons (Default) --> */}
              <div class="mb-2">
                <code>.btn-circle</code>
              </div>
              <a href="#" class="btn btn-primary btn-circle">
                <FontAwesomeIcon icon={faBlog} />
              </a>
              <a href="#" class="btn btn-success btn-circle">
                <FontAwesomeIcon icon={faCheck} />
              </a>
              <a href="#" class="btn btn-info btn-circle">
                <FontAwesomeIcon icon={faInfoCircle} />
              </a>
              <a href="#" class="btn btn-warning btn-circle">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </a>
              <a href="#" class="btn btn-danger btn-circle">
                <FontAwesomeIcon icon={faTrash} />
              </a>
              {/* <!-- Circle Buttons (Small) --> */}
              <div class="mt-4 mb-2">
                <code>.btn-circle .btn-sm</code>
              </div>
              <a href="#" class="btn btn-primary btn-circle btn-sm">
                <FontAwesomeIcon icon={faBlog} />
              </a>
              <a href="#" class="btn btn-success btn-circle btn-sm">
                <FontAwesomeIcon icon={faCheck} />
              </a>
              <a href="#" class="btn btn-info btn-circle btn-sm">
                <FontAwesomeIcon icon={faInfoCircle} />
              </a>
              <a href="#" class="btn btn-warning btn-circle btn-sm">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </a>
              <a href="#" class="btn btn-danger btn-circle btn-sm">
                <FontAwesomeIcon icon={faTrash} />
              </a>
              {/* <!-- Circle Buttons (Large) --> */}
              <div class="mt-4 mb-2">
                <code>.btn-circle .btn-lg</code>
              </div>
              <a href="#" class="btn btn-primary btn-circle btn-lg">
                <FontAwesomeIcon icon={faBlog} />
              </a>
              <a href="#" class="btn btn-success btn-circle btn-lg">
                <FontAwesomeIcon icon={faCheck} />
              </a>
              <a href="#" class="btn btn-info btn-circle btn-lg">
                <FontAwesomeIcon icon={faInfoCircle} />
              </a>
              <a href="#" class="btn btn-warning btn-circle btn-lg">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </a>
              <a href="#" class="btn btn-danger btn-circle btn-lg">
                <FontAwesomeIcon icon={faTrash} />
              </a>
            </div>
          </div>
  {/* ------------------------------------------------------- */}
          {/*Brand Buttons*/}
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary d-sm-flex">
                Brand Buttons
              </h6>
            </div>
            <div class="card-body">
              <p>
                Google and Facebook buttons are available featuring each company's
                respective brand color. They are used on the user login and
                registration pages.
              </p>
              <p>
                You can create more custom buttons by adding a new color variable
                in the
                <code>_variables.scss</code> file and then using the Bootstrap
                button variant mixin to create a new style, as demonstrated in the{" "}
                <code>_buttons.scss</code>
                file.
              </p>
              <a href="#" class="btn btn-google btn-block">
                <i class="fab fa-google fa-fw"></i>
                .btn-google
              </a>
              <a href="#" class="btn btn-facebook btn-block">
                <i class="fab fa-facebook-f fa-fw"></i> .btn-facebook
              </a>
            </div>
          </div>
        </div>
  {/* ------------------------------------------------------- */}
        <div class="col-lg-6">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary d-sm-flex">
                Split Buttons with Icon
              </h6>
            </div>
            <div class="card-body">
              <p>
                Works with any button colors, just use the{" "}
                <code>.btn-icon-split</code> class and the markup in the examples
                below. The examples below also use the
                <code>.text-white-50</code> helper class on the icons for
                additional styling, but it is not required.
              </p>
              <a href="#" class="btn btn-primary btn-icon-split">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faFlag} />
                </span>
                <span class="text">Split Button Primary</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span class="text">Split Button Success</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-info btn-icon-split">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </span>
                <span class="text">Split Button Info</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-warning btn-icon-split">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </span>
                <span class="text">Split Button Warning</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-danger btn-icon-split">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span class="text">Split Button Danger</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-secondary btn-icon-split">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span class="text">Split Button Secondary</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-light btn-icon-split">
                <span class="icon text-gray-600">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span class="text">Split Button Light</span>
              </a>
              <div class="mb-4"></div>
              <p>Also works with small and large button classes!</p>
              <a href="#" class="btn btn-primary btn-icon-split btn-sm">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faFlag} />
                </span>
                <span class="text">Split Button Small</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-primary btn-icon-split btn-lg">
                <span class="icon text-white-50">
                  <FontAwesomeIcon icon={faFlag} />
                </span>
                <span class="text">Split Button Large</span>
              </a>
            </div>
          </div>
        </div>
  {/* ------------------------------------------------------- */}
  {/* End of Row... */}
      </div>
    );
  };
  
  export default Buttons;
import React from "react";

const DashEarnings = ({
  Title,
  Amount,
  CardLeftColor,
  CardTextColor,
  icons,
}) => {
  return (
    <>
      {/*Earnings (Monthly) Card Example*/}
      <div class="col-xl-3 col-md-6 mb-4">
        <div class={`card border-left-${CardLeftColor} shadow h-100 py-2`}>
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class={`text-xs font-weight-bold text-${CardTextColor} text-uppercase mb-1`}
                >
                  {Title}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {Amount}
                </div>
              </div>
              <div class="col-auto">{icons}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashEarnings;
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
const CardVotation = ({
  nameVotation = "",
  author = "",
  description = "",
  sdate = "",
  edate = "",
  Qimage = "",
  survey = "",
}) => {
  return (
    <>
      <div className="contenedor  w-96 justify-center items-center">
        {" "}
        {/* contenedor  w-96 justify-center items-center mt-8 mr-6 mb-6 h-auto  */}
        <div
          className="prin h-auto rounded-sm border-solid"
          style={{ backgroundColor: "#161515", border: "1px solid #999999" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 bg-none rounded-lg p-4">
            <img
              id="LogoVotation"
              src={Qimage || "/defaultSurvey.jpg"}
              alt=""
              width="350"
              height="237.391"
              style={{ width: "350", height: "237.391" }}
              className="w-full h-20 md:h-auto rounded-lg bg-gray-300 object-cover md:object-center"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3
                  id="NameVotation"
                  className="font-semibold text-white mb-2 md:text-left"
                >
                  {nameVotation}
                </h3>
                <p id="DescriptionVotation" className="text-gray-500 text-left">
                  {description}
                </p>
              </div>
              <div>
                <p className=" text-white">Author</p>
                <p id="AuthorVotation" className="text-gray-500">
                  {author}
                </p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-white">Start Date</p>
                    <p id="StartDate" className="text-gray-500">
                      {sdate}
                    </p>
                  </div>
                  <div>
                    <p id="" className="text-white">
                      End Date
                    </p>
                    <p id="EndDate" className="text-gray-500">
                      {edate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divP w-full h-14 flex " style={{}}>
          <div
            className="prin2 w-2/5 h-1/2 border-t-0 border-r-0"
            style={{
              backgroundColor: "#161515",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#999999",
              borderTop: "0ch",
              borderRight: "0ch",
            }}
          >
            <div className="justify-center text-center cursor-pointer">
              <button
                className="font-semibold text-white text-xl p-0"
                onClick={() => window.location.replace("/survey/" + survey)}
              >
                Start
              </button>
            </div>
          </div>
          <div
            className="prin3 h-1/2 w-1/6"
            style={{
              /* establece la proporción del ancho para el segundo div */

              backgroundColor: "#161515",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#999999",
              borderTop: "0ch",
              borderLeft: "0ch",
              transform: "skew(-30deg)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CardVotation;

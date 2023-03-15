/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import axios from "axios";

export default function Survey (){
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/getContenders/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center pt-16">
        <div className="contenedor w-2/5 justify-center items-center mt-8 mr-6 mb-6 h-auto">
          <div
            className="prin h-auto rounded-sm border-solid"
            style={{ backgroundColor: "#161515", border: "1px solid #999999" }}
          >
            <div className="h-full w-full">
              <div
                className="h-2/3 w-ful"
                style={{
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: "#999999",
                }}
              ></div>
            </div>

            <div
              className="Candidate"
              style={{
                backgroundColor: "#161515",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="w-1/5 h-24">
                <img
                  src="/GRIZZLYE.jpg"
                  alt=""
                  className="w-full h-full md:h-auto min-h-max rounded-lg bg-gray-300 object-fill md:object-center"
                  style={{ height: "80%" }}
                />
              </div>
              <div
                className="Candidate_info"
                style={{ color: "#CCCCCC", flex: "1", marginLeft: "20px" }}
              >
                <h3
                  className="Candidate_name"
                  style={{
                    fontSize: "20px",
                    marginTop: "0",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Proyect Name
                </h3>
                <p
                  className="Candidate_description"
                  style={{
                    fontSize: "16px",
                    marginTop: "0",
                    marginBottom: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  earum, soluta, fugiat in cumque quo simili.
                </p>
              </div>
            </div>
          </div>
          <div className="divP w-full h-7 flex ">
            <div
              className="prin2 w-2/5 h-full border-t-0 border-r-0"
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
                <a href="#" className="open-modal">
                  <h3 className="font-semibold text-white text-xl">Evaluate</h3>
                </a>
              </div>
            </div>
            <div
              className="prin3 h-full w-1/6"
              style={{
                backgroundColor: "#161515",
                border: `1px`,
                borderStyle: "solid",
                borderColor: "#999999",
                borderTop: "0ch",
                borderLeft: "0ch",
                transform: "skew(-30deg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};


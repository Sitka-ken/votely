import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

import CardVotation from "../components/VotationCard";
export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/getSurveys")
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="mt-10 pt-10">
        <div className="w-full max-h-full">
          <div className="w-full max-h-full">
            <div className="W-full h-auto flex flex-wrap pb-5">
              <h2 className="text-white ml-6 mt-6 text-3xl font-semibold">
                AVAILABLE SURVEYS
              </h2>
            </div>
            <div
              className="grid gap-4 grid-cols-4 overflow-y-auto"
              style={{ height: "591px" }}
            >
              {" "}
              {/*max-w-screen-lg mx-auto flex flex-wrap justify-center */}
              {data.map((survey) => (
                <div key={survey.transaction.name}>
                  <CardVotation
                    nameVotation={survey.transaction.name}
                    author={survey.author}
                    description={survey.transaction.description}
                    sdate="-"
                    edate="-"
                    Qimage={(survey.transaction.name=='GRIZZLYTHON')? "/GRIZZLYE.jpg":""}
                    survey={survey.id}
                  />
                </div>
              ))}
            </div>
            <div className="container p-4">{/*props.children*/}</div>
          </div>
        </div>
      </div>
    </>
  );
}

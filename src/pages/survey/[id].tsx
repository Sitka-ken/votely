/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import axios from "axios";
import CandidateCard from "../../components/CandidateCard";
//import { SendTransaction } from "../../components/SendTransaction";
export default function Survey (){
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/getContenders/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center pt-16">
        {data.map((candidate) => (
                  <CandidateCard
                    key={candidate.transaction.name}
                    nameCandidate={candidate.author}
                    account={candidate.id}
                  />
              ))}
        {/*<SendTransaction/>*/}
      </div>
    </>
  );
};


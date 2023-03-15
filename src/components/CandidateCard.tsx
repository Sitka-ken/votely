/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Connection, clusterApiUrl, VersionedTransaction,sendTransaction  } from '@solana/web3.js';
import { WalletAdapterNetwork, PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import idl from '../constants/idl.json';
import * as anchor from '@project-serum/anchor';
import { PublicKey, Transaction, SystemProgram, TransactionInstruction } from "@solana/web3.js";
import * as Buffer from 'buffer'
const CandidateCard = ({
  nameCandidate = "",
  account = ""
}) => {
    const handleSubmit = async(event) => {
        /*const programPubKey = 'HZHWXmC5M7SzUH1Sov3NwcQpUcPAq2MCkkwi45xKW3bZ'

        let connection = new Connection(clusterApiUrl('devnet'));
        const provider = new anchor.AnchorProvider(connection,{preflightCommitment: 'recent'});
        const program = new anchor.Program(idl,programPubKey , provider)

        const candidateIdentityAccount = new anchor.web3.PublicKey(event);

        // Get the current version of the account data
        //const candidateIdentity = await connection.getAccountInfo(candidateIdentityAccount);
        const candidateIdentity = await program.account.candidateIdentity.fetch(candidateIdentityAccount);
        const candidateIdentityData = idl.CandidateIdentity.decode(candidateIdentity.data);

        candidateIdentityData.votes += 1;
        // Encode the new account data
        const candidateIdentityBuffer = Buffer.from(idl.CandidateIdentity.encode(candidateIdentityData).finish());

        const programId = new PublicKey(programPubKey);
        const transaction = new web3.Transaction().add(
        anchor.web3.SystemProgram.programId,
        [
            {
            pubkey: candidateIdentityAccount,
            isSigner: false,
            isWritable: true,
            }
        ],
        program.programId,
        candidateIdentityBuffer,
        );
        let latestBlockhash = await connection.getLatestBlockhash();
        const transation = new VersionedTransaction(transaction);
        const signature = await sendTransaction(transation, connection);
      await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        "confirmed"
      );
        console.log("Transaction signature:", signature);*/
        alert("we are working on it")
    }
  return (
    <>
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
                  src="/Votely.png"
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
                  {nameCandidate}
                </h3>
                <p
                  className="Candidate_description"
                  style={{
                    fontSize: "16px",
                    marginTop: "0",
                    marginBottom: "10px",
                  }}
                >
                  Powered by votely
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
                  <button
                    className="font-semibold text-white text-xl p-0"
                    onClick={() => handleSubmit(account)}
                >Vote</button>
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
    </>
  );
};

export default CandidateCard;

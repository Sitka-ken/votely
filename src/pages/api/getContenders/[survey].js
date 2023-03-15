import { NextApiRequest, NextApiResponse } from 'react'
import { mySqlQuery } from "../../../helpers/databases"
import idl from '../../../constants/idl.json'
import { web3, Connection,clusterApiUrl, PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
require('dotenv').config();
export default async function handler(req, res) {
    const programPubKey = 'HZHWXmC5M7SzUH1Sov3NwcQpUcPAq2MCkkwi45xKW3bZ'
    const { survey } = req.query
    const surveyPubkey = survey
    let connection = new Connection(clusterApiUrl('devnet'));
    const provider = new anchor.AnchorProvider(connection,{preflightCommitment: 'recent'});
    const program = new anchor.Program(idl,programPubKey , provider)
    let cluster = [];
    const programAccounts = await connection.getProgramAccounts(new PublicKey(programPubKey),{commitment: 'recent'})
    for(const account of programAccounts){
        const acc = account.pubkey.toString()
        try {
            const transaction = await program.account.candidateIdentity.fetch(acc);
            if(surveyPubkey === transaction.forElection.toBase58()){
                cluster.push({id:acc,transaction:transaction});
            }
        }catch(e){
            
        }
    }
    
    res.statusCode = 200
    res.json(cluster)
}
import { NextApiRequest, NextApiResponse } from 'react'
import { mySqlQuery } from "../../helpers/databases"
import idl from '../../constants/idl.json'
import { web3, Connection,clusterApiUrl, PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
export default async function handler(req, res) {
    const programPubKey = "HZHWXmC5M7SzUH1Sov3NwcQpUcPAq2MCkkwi45xKW3bZ"
    let connection = new Connection(clusterApiUrl('devnet'));
    const provider = new anchor.AnchorProvider(connection,{preflightCommitment: 'recent'});
    const program = new anchor.Program(idl,programPubKey , provider)
    let cluster = [];
    const programAccounts = await connection.getProgramAccounts(
        new PublicKey(programPubKey),{commitment: 'recent'})
        for(const account of programAccounts){
            const acc = account.pubkey.toString()
            try {
                const transaction = await program.account.electionData.fetch(acc);
                let author = await mySqlQuery(`SELECT concat(name, ' ', last_name) as author FROM soto_playground.users where wallet='${transaction.maker}'`);
                cluster.push({id:acc,transaction:transaction,author:author[0].author});
            }catch(e){
                
            }
        }
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
    res.json(cluster)
}
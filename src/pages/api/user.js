import { NextApiRequest, NextApiResponse } from 'react'
import { mySqlQuery } from "../../helpers/databases"
import _ from 'lodash'
export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    switch (req.method) {
        case "POST":
            let data = await mySqlQuery(`select * from users where (username='${req.body.userOrMail}' or email='${req.body.userOrMail}') and password = '${req.body.signinPassword}'`);
            if(_.size(data)==1){
                res.statusCode = 200;
                res.json({ isAllowed: true });
            }else{
                res.statusCode = 200;
                res.json({ isAllowed: false });
            }
            break;
        case "PUT":
            let firstName = req.body.firstName
            let lastName = req.body.lastName
            let populationRegister = req.body.populationRegister
            let email = req.body.email
            let address = req.body.address
            let cellphone = req.body.cellphone
            let wallet = req.body.wallet
            let sex = req.body.sex
            let birthDate = req.body.birthDate
            let username = req.body.username
            let password = req.body.password
            let verifyPassword = req.body.verifyPassword
            let suspect = await mySqlQuery(`select * from users where population_registration='${populationRegister}' or wallet='${wallet}'`);
            let susuname = await mySqlQuery(`select * from users where username='${username}'`);
            if(_.size(suspect) != 0){
                res.statusCode = 200;
                res.json({ isAllowed: false, errorCode: "Population register or wallet duplicated, cant continue with the process" })
            }else{
                if(_.size(susuname) != 0){
                    res.statusCode = 200;
                    res.json({ isAllowed: false, errorCode: "Username already taken" })
                } else {
                    await mySqlQuery(`INSERT INTO users (name, last_name, population_registration,email, address, telephone, wallet, sex, birth_date, username, password) 
                    VALUES ('${firstName}', '${lastName}', '${populationRegister}', '${email}', '${address}', '${cellphone}', '${wallet}', '${sex}', '${birthDate}', '${username}', '${password}');`);
                    res.status(200).json({ isAllowed: true })
                }
            }
            break;
        default:
            break;
    }


    


  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end()
}
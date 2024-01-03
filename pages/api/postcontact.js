const fs = require('node:fs');

export default async function  handler(req,res){
    if(req.method==='POST'){
        let data= await fs.promises.readdir('contactData');
        // console.log(req.body.email);
        const {email}=req.body;
        fs.promises.writeFile(`contactData/${email}.json`,(JSON.stringify(req.body)));
        res.status(200).json("Data Sent Successfully")
    }else{
        res.status(200).json(["allBLogs"])
    }
}
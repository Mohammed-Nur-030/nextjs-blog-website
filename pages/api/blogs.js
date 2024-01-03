// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('node:fs');

export default  async function handler(req, res) {
  
    try{
        let data= await fs.promises.readdir("blogData");
            // console.log("data",data);
            let myFile;
            let allBlogs=[];
            for (let index = 0; index < data.length; index++) {
                const element = data[index]; 
                // console.log("Element",element);
                myFile=await fs.promises.readFile("blogData/"+element,"utf-8");
                // console.log("myFile",myFile);
                allBlogs.push(JSON.parse(myFile));

            }
            res.status(200).json(allBlogs);
           
     

        
        
    }catch(err){
        res.status(400).json({"Error":err});
    }
  
}

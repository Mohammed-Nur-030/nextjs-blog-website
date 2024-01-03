// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('node:fs');
export default function handler(req, res) {
  
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    }).format(currentDate);
    
    console.log(formattedDate);
  console.log("date",formattedDate);
  res.status(200).json({ formattedDate })
}

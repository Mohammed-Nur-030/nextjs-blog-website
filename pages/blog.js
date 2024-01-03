import React, { useEffect, useState } from 'react'
import styles from "@/styles/Blog.module.css"
import Link from 'next/link'
const fs = require('node:fs');


const Blog = (props) => {
  // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   // fetch('http://localhost:3000/api/blogs').then((a) => {
  //   //   return a.json();
  //   // })
  //   //   .then((parsed) => {
  //   //     console.log(parsed)
  //   //     setBlogs(parsed);

  //   //   })
  // }, [])


  return (
    <>

      <div className={`${styles.blogs}`}>
        <h2>Popular Blogs</h2>

        {
          blogs.map((item, index) => {
            // console.log("item ",item)
            return (
              <Link key={index} href={`/blogpost/${item.slug}`}>
                <div className={`${styles.blogItem}`}>
                  <h3>{item.title}</h3>
                  <p>
                   {
                    item.metadesc
                   }
                  </p>
                </div>
              </Link>
            )

          })
        }

       
      </div>

    </>
  )
}

export async function getStaticProps(context){

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
  
   return{
     props:{allBlogs},
   }
 }


// export async function getServerSideProps(context){
//  let data=await fetch('http://localhost:3000/api/blogs')
//  let allBlogs=await data.json();
// //  console.log(allBlogs)
 
//   return{
//     props:{allBlogs},
//   }
// }

export default Blog

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "@/styles/BlogPost.module.css"
const fs = require('node:fs');

const slug = (props) => {

  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(data){
    return {__html:data};
  }




  return (
    <div className={`${styles.main}`}>
      <h1>Title of the Blog:{blog?.title} </h1>
      { blog &&
        <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        }
    </div>
  )
}


export async function getStaticPaths(){
  return {
    paths:[
      {params:{slug:'how-to-learn-Ruby'}},
      {params:{slug:'how-to-learn-javascript'}},
      {params:{slug:'how-to-learn-cpp'}},
    ],
    fallback:true
  }
}


export async function getStaticProps(context) {
  // console.log("context.req.url",context.req.url)
  // console.log("context.query.slug",context.query.slug)
  const {slug}=context.params;
  let data=await fs.promises.readFile(`blogData/${slug}.json`,"utf-8")
  let myBlog=JSON.parse(data)
  // console.log("myBlog",myBlog)
  return {
    props: { myBlog },
  }
}



// export async function getServerSideProps(context) {
//   // console.log("context.req.url",context.req.url)
//   console.log("context.query.slug",context.query.slug)
//   const {slug}=context.query;
//     let data=await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     let blog=await data.json();
  
//   return {
//     props: { blog },
//   }
// }

export default slug

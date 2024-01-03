import React, { useEffect, useState } from 'react'
import styles from "@/styles/Blog.module.css"
import Link from 'next/link'
const fs = require('node:fs');
import InfiniteScroll from 'react-infinite-scroll-component';


const Blog = (props) => {
  // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);
  // useEffect(() => {
  //   // fetch('http://localhost:3000/api/blogs').then((a) => {
  //   //   return a.json();
  //   // })
  //   //   .then((parsed) => {
  //   //     console.log(parsed)
  //   //     setBlogs(parsed);

  //   //   })
  // }, [])
  const more = async () => {
    // console.log("Inside fetch function");
  
    try {
      let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
      if (!d.ok) {
        throw new Error(`HTTP error! Status: ${d.status}`);
      }
      let data = await d.json();
      setCount(count + 2);
      setBlogs((prevBlogs) => [...prevBlogs, ...data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  


  return (
    <div className={`${styles.main}`}>
 
      <InfiniteScroll
        dataLength={blogs.length}
        next={more}
        hasMore={props.allCount > blogs.length}
        // hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {
         blogs.map((item, index) => {
          // console.log("item ",item)
          return (
            <div key={item.index} className={`${styles.box}`}>
              <Link href={`/blogpost/${item.slug}`}>
                <div className={`${styles.blogItem}`}>
                  <h3>{item.title}</h3>
                  <p>
                    {
                      item.metadesc
                    }
                  </p>
                </div>
              </Link>
            </div>
          )
        })
      }
      </InfiniteScroll>


    </div>
  )
}

export async function getStaticProps(context) {

  let data = await fs.promises.readdir("blogData");
  let allCount = data.length;
  // console.log("data",data);
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const element = data[index];
    // console.log("Element",element);
    myFile = await fs.promises.readFile("blogData/" + element, "utf-8");
    // console.log("myFile",myFile);
    allBlogs.push(JSON.parse(myFile));

  }

  return {
    props: { allBlogs, allCount },
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

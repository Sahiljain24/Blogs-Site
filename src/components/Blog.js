import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Spinner } from "./Spinner";


const Blog =()=>{

    const {loading,posts} =useContext(AppContext);
    console.log(posts)
    return(
        <div>
             {
                loading?(
                    <Spinner></Spinner>
                ):(
                    <div>
                        {   posts.length==0 ? (
                            <div> No Post Found</div>
                        ):(

                            posts.map((post)=>(
                                <div>
                                     <h2>{post.title}</h2>
                                     <p>By {post.author} on {post.category}</p>
                                     <p>Posted on {post.date}</p>
                                     <p>{post.content}</p>
                                    
                                        
                                            <div>
                                            {
                                                post.tags.map((tag)=>(
                                                <span>{`#${tag}  `}</span>
                                            ))
                                        }
                                            </div>
                                       
                                    
                                 </div>)
                            )
                        )
                           
                        }
                    </div>
                )
             }
        </div>
    );

}
export default Blog
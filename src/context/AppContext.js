import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { Children } from "react";

export const AppContext= createContext();


export default function AppContextProvider({children}){
  
    const [loading,setLoading] =useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    async function fetchData(page=1){
        let url = `${baseUrl}?page=${page}` ; 
        setLoading(true)
        try{

            const output = await fetch(url);
            const data = await output.json();
            console.log(data);
             await  setPage(data.page)
            await  setPosts(data.posts)
           await setTotalPages(data.totalPages)
        }catch{
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
       setLoading(false)
    }
   console.log(posts)

    function handlePageChange(page){
        setPage(page)
        fetchData(page)
    }
  
  useEffect(()=>(fetchData()),[]);
const value={
        loading ,posts,page,totalPages,setLoading,setPage,setPosts,setTotalPages,handlePageChange
}


return<AppContext.Provider value={value} >
   {children}
</AppContext.Provider>

}
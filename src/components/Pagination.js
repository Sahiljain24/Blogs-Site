import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Pagination =()=>{
    
    const {page,totalPages,handlePageChange } =useContext(AppContext)
     
    return(
        <div>
            <div>
                {
                    page>1 &&
                    < button 
                    onClick={()=>handlePageChange(page-1)} 
                    > Previous</button>
                }
                 {
                    page<=totalPages &&
                    <button
                    onClick={()=>handlePageChange(page+1)}
                    >Next</button>
                }
            </div>
               
               <div>
                 <p>{page} of {totalPages}</p>
               </div>
               
        </div>
    );

}
export default Pagination
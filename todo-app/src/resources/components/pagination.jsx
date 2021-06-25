import { useEffect, useState } from "react";
import {Link,useHistory,useLocation, useParams} from 'react-router-dom'
function Pagination(props){
    const {limit,totalPage} = props;
    const { page } = useParams();
    const { location, query, search } = useLocation(); 
    const history = useHistory();
    const [pageCurrent,setPageCurrent]=useState(1);
    useEffect(function(){
        console.log("page", new URLSearchParams(search).get('page'))
       console.log("page",page);
    },[])
    const pages = [];
    for(let i=1;i<Math.ceil(totalPage/limit);i++){
        pages.push(i);
    }
    const handlePage =(number)=>{

        history.push(`${location.pathname}?page=${number}`);
    }
    const handlePrevious=(e)=>{
        e.preventDefault();
        console.log(pageCurrent);
        // let prev =  setPageCurrent((pageCurrent--))
      
        // history.push(`${location.pathname}?page=${prev}`);
    }
    const handleNext=(e)=>{
        e.preventDefault();
        // let next =  setPageCurrent((pageCurrent++))
        // history.push(`${location.pathname}?page=${next}`);
    }
    const renderPagination =  pages.map((number)=>{
        return (
            <li className={`page-item`+(number==pageCurrent?' active ':'')} key={number.toString()}><button className="btn page-link" onClick={()=>handlePage(number)}>{number}</button></li>
        );
    });
    return(
        <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><button onClick={(e)=>handlePrevious(e)} className="page-link">Previous</button></li>
                    {renderPagination}
                <li className="page-item"><button onClick={(e)=>handleNext(e)} className="page-link">Next</button></li>
            </ul>
        </nav>
        </>
    )
}
export default Pagination;
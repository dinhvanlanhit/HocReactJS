import { useEffect, useState } from "react";
import {Link,useHistory,useLocation, useParams} from 'react-router-dom'
function Pagination(props){
    const location = useLocation();
    const getQueryParams=()=>{let t =location.search; if(!t||"string"!=typeof t||t.length<2)return new Map;const r=t.substr(1).split("&").map(t=>{const r=t.split("=");return[r[0],r[1]]});return new Map(r)};
    const m = getQueryParams();
    const objSearch  = [...m].map(([name, value]) => ({ name, value }));
    const {limit,totalPage} = props;
    const history = useHistory();
    const [pageCurrent,setPageCurrent] = useState(0);
    const [stringSearch,setStringSearch] = useState("");
    useEffect(function(){
        if(m.get('page')){
            setPageCurrent(m.get('page'));
        }else{
            setPageCurrent(1);
        }
        let str = "";
        if(objSearch.length>0){
            objSearch.map((value,key)=>{
                if(value.name!='page'){
                    str+=`&${value.name}=${value.value}`;
                }
            });
        }
        setStringSearch(str);
    },[])
    const pages = [];
    for(let i=1;i<Math.ceil(totalPage/limit);i++){
        pages.push(i);
    }
    const handlePage =(number)=>{
        setPageCurrent(number);
    }
    const handlePrevious=(e)=>{
        e.preventDefault();
        if(pageCurrent>1){
            setPageCurrent((pageCurrent-1));
            let url = `${location.pathname}?page=${pageCurrent}${stringSearch}`;
            history.push(url);
        }
    }
    const handleNext=(e)=>{
        e.preventDefault();
        if(pageCurrent<=(Math.ceil(totalPage/limit)-1)){
            setPageCurrent((pageCurrent+1));
            let url = `${location.pathname}?page=${pageCurrent}${stringSearch}`;
            history.push(url);
        }
    }
    const renderPagination =  pages.map((number)=>{
        const url = `${location.pathname}?page=${number}${stringSearch}`;
        return (
            <li  className={`page-item`+(number==pageCurrent?' active ':'')} key={number.toString()}><Link onClick={()=>handlePage(number)} className="btn page-link" to={url} >{number}</Link></li>
        );
    });
    return(
        <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><button disabled={pageCurrent==1?true:false} onClick={(e)=>handlePrevious(e)} className="page-link">Previous</button></li>
                    {renderPagination}
                <li className="page-item"><button disabled={pageCurrent==(Math.ceil(totalPage/limit)-1)?true:false} onClick={(e)=>handleNext(e)} className="page-link">Next</button></li>
            </ul>
        </nav>
        </>
    )
}
export default Pagination;
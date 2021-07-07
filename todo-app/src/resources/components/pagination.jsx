import { useEffect, useState } from "react";
import {Link,useHistory,useLocation, useParams} from 'react-router-dom'
function Pagination(props){
    const location = useLocation();
    const getQueryParams=()=>{let t =location.search; if(!t||"string"!=typeof t||t.length<2)return new Map;const r=t.substr(1).split("&").map(t=>{const r=t.split("=");return[r[0],r[1]]});return new Map(r)};
    const m = getQueryParams();
    const objSearch  = [...m].map(([name, value]) => ({ name, value }));
    const {limit,totalPage} = props;
    const history = useHistory();
    const [pramString,setPramString] = useState("");
    const [pageCurrent,setPageCurrent] = useState();
    const [numberPage,setNumberPage] = useState(()=>{
        return Math.ceil(props.totalPage/props.limit);
    });
    const [pages,setPages] = useState(()=>{
        let array = [];
        for(let i=1;i<=numberPage;i++){
            array.push(i);
        }
        return array;
    });
    useEffect(function(){
        console.log(pages);
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
        setPramString(str);
    },[])
    const handlePage =(number)=>{
        setPageCurrent(number);
    }
    const handlePrevious=(e)=>{
        e.preventDefault();
        if(pageCurrent>1){
            let page = (pageCurrent-1);
            setPageCurrent(page);
            let url = `${location.pathname}?page=${page}${pramString}`;
            history.push(url);
        }
    }
    const handleNext=(e)=>{
        e.preventDefault();
        if(pageCurrent<=numberPage){
            let page = (pageCurrent+1);
            setPageCurrent(page);
            let url = `${location.pathname}?page=${page}${pramString}`;
            history.push(url);
        }
    }
    const renderPagination =  pages.map((number)=>{
        const url = `${location.pathname}?page=${number}${pramString}`;
        return (
            <li  className={`page-item`+(number==pageCurrent?' active ':'')} key={number.toString()}><Link onClick={()=>handlePage(number)} className="btn page-link" to={url} >{number}</Link></li>
        );
    });
    // console.log(pageCurrent,numberPage)
    return(
       
        <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><button disabled={pageCurrent==1?true:false} onClick={(e)=>handlePrevious(e)} className="page-link">Previous</button></li>
                    {renderPagination}
                <li className="page-item"><button disabled={pageCurrent==numberPage?true:false} onClick={(e)=>handleNext(e)} className="page-link">Next</button></li>
            </ul>
        </nav>
        </>
    )
}
export default Pagination;
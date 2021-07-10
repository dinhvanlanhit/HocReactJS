import { useState } from "react";
import Child from "./child";
function Parent(){
    const [name,setName]=useState("Đinh Văn Lành");
    const handleChangeName=(data)=>{
        setName(data);
    }
    const handleClickButton=(e)=>{
        alert(e);
    }   
    return (<>
        <p>Event Child to Parent</p>
        <Child value={name} handleClickButton={handleClickButton} onChange={handleChangeName}/>
        <p>Event Parent to Child</p>
        <button className="btn btn-info">Parent Click</button>
    </>);
}
export default Parent;
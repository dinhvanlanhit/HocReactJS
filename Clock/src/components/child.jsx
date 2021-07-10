
function Child(props){
    const handleChangeName=(e)=>{
        props.onChange(e.target.value);
    }
    const handleClickButton =()=>{
        props.handleClickButton("hello");
    }
    const handleParent=()=>{
        alert();
    }
    return (<>
        <input onChange={(e)=>handleChangeName(e)} value={props.value}/>
        <button onClick={handleClickButton} className="btn btn-danger">Click</button>
    </>);
}
export default Child;
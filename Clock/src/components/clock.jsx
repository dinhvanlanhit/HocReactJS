import {React,useState,useEffect,useRef} from 'react';
function Clock() {
    const [timeString,setTimeString]= useState(null);
    const [classButton,setClassButton]= useState('info');
    const intervalRef = useRef(null);
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            const now = new Date();
            const hours = `0${now.getHours()}`.slice(-2);
            const minutes = `0${now.getMinutes()}`.slice(-2);
            const seconds = `0${now.getSeconds()}`.slice(-2);
            const currentTimeString = `${hours}:${minutes}:${seconds}`;
            if(parseInt(seconds)%2==0){
                setClassButton('danger')
            }else{
                setClassButton('info')
            }
            setTimeString(currentTimeString);
        },1000);
        return ()=>{
            clearInterval(intervalRef.current);
        }
    },[]);
    return (
        <div>
            <button className={"btn btn-"+classButton}>{timeString}</button>
        </div>
    );
}

export default Clock;
import {useState} from 'react'
function Home() {
  const [couter, setcouter] = useState(1)
  const [classButton, setclassButton] = useState('info')
  function clickCounter(){
    if(couter%2==0){
      setclassButton('danger')
    }else{
      setclassButton('info')
    }
    setcouter(couter+1)
  }
  return (
      <div className="App">
            <h1>Hello {couter}</h1>
            <button onClick={clickCounter} className={"btn btn-"+classButton}>Couter</button>
      </div>
  );
}

  
export default Home;
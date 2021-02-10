import React, {useEffect, useState} from 'react'
import Heading from "./components/Heading";
import Question from './components/Question';
import Timer from './components/Timer';


function App() {

  const[seconds,setSeconds] = useState(60)
  const [isActive, setIsActive] = useState(false); // true - start
  const [data, setData] = useState([])


    const pauseTimer =() =>{
      console.log('pause')
      setIsActive(false)
        //lifeline or when user answers
    }
    const resetTimer =() =>{
        setSeconds(60)
        setIsActive(true);

        //new question
    }

    


    useEffect(() => {

      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

    useEffect(()=>{
      getData()
    },[])
  
const getData =() =>{
  fetch('questions.json',
  {
    headers:{
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
  }
  ).then(res=>res.json()).then(res=>setData(res)
  ).catch(err=>console.log(err))

  console.log(data)

}




  return (
    <div className="App">
    <Heading/>
    <Timer seconds={seconds} />
    {/*<Question pauseTimer={pauseTimer} resetTimer={resetTimer} data={data}/>*/}
    {/* Message */}
    {/* LifeLines */}
    {/* Cashset */}
    </div>
  );
}

export default App;

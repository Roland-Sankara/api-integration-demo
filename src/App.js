import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);
  // const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [quote,setQuote] = useState('quote');

  useEffect(()=>{
    // fetch quotes
    let apiUrl = 'https://type.fit/api/quotes';
    fetch(apiUrl)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      let firstQuote = data[0].text;
      setQuote(firstQuote);
    })
    .catch((error)=>{
      console.log(error);
    })

  },[])

  // useEffect(function, dependency Array)

  function increaseCount(){
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function countChanged(e){
    // get target value
    let inputvalue = parseInt(e.target.value);
    // update state with value
    setCount(inputvalue);

  }

  return (
    <div className="App">
     <h1>Continuous Deployment</h1>
     <h1>Counter App</h1>
     <p>{quote}</p>
     <input type="number" value={count} onChange={countChanged}/>
     {/* <p>user status: LoggedIn -- {isLoggedIn?'True':'False'}</p> */}
     <div className="btn-container">
       <button onClick={increaseCount} >Increase</button>
       <button onClick={decreaseCount} >Decrease</button>
     </div>
    </div>
  );
}

export default App;

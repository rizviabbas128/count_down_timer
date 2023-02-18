import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [time, setTime] = useState(0);

  const handleDown = (event) => {
    if(event.key ==='Enter') {
      const inputTime = Math.floor(event.target.value);
      if(isNaN(inputTime)) {
        setTime(0);
      }else {
        setTime(inputTime);
      }
    }
  };

  useEffect(() => {
    let interValid;
    if(time > 0) {
      interValid = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000)
    }else {
      setTime(0);
    }return () => clearInterval(interValid);
  },[time]);
  return (
    <div className="App">
      <label>press Number and hit Enter </label>
      <input id='timeCount' onKeyDown={handleDown} />
      <div id='currentTime'>{time}</div>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import InfoBox from './Components/InfoBox';
import * as R from 'ramda';

function App() {
  let [data, setData] = useState([]);
  
  useEffect(() => {
    const initialJson = require('./dataForApp.json').room;
    setData(initialJson);
  }, [])
  
  return (
    <div className="App">
      {R.map(info => <InfoBox data={info} key={data.indexOf(info)}/>, data)}
    </div>
  );
}

export default App;

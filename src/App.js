import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import InfoBox from "./Components/InfoBox";
import * as R from "ramda";
import _ from 'lodash'
import axios from 'axios';

function App() {
  let [data, setData] = useState([]);
  let [initialJson, setInitial] = useState([]);

  let lower = useRef()
  let higher = useRef()

  useEffect(() => {
    axios.get('https://c19caf79.ngrok.io/room')
    .then(res => {
      console.log(res.data);
      setInitial(res.data);
      setData(res.data);
    })
  }, []);

  const searchRoom = _.debounce((queryString) => {
    let newData = R.filter(info => info.name.toLowerCase().includes(queryString.toLowerCase()), initialJson);
    setData(newData);
  }, 250);

  const searchValue = () => {
    let lowerValue = lower.current.value;
    console.log(lowerValue);
    let higherValue = higher.current.value;
    console.log(higherValue);

    let newData = R.filter(info => {
      let money = parseInt(info.price.replace('vnđ', '').split(',').join(''))
      console.log(money)
      if (money >= lowerValue && money <= higherValue) {
        return true;
      }
      else return false;
    }, initialJson)

    setData(newData);
  }

  return (
    <div className="App">
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Search"
          onChange={event => searchRoom(event.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          ref={lower}
          type="number"
          className="form-control"
          placeholder="Lower range"
          onChange={searchValue}
        />
        <input
          ref={higher}
          type="text"
          className="form-control"
          placeholder="Higher range"
          onChange={searchValue}
        />
      </div>
      {R.map(
        info => (
          <InfoBox data={info} key={data.indexOf(info)} />
        ),
        data
      )}
    </div>
  );
}

export default App;

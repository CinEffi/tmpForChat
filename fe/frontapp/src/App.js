import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const protocol = "http"
const host = "localhost"
const port = "8080"
const baseUrl = `${protocol}://${host}:${port}`



function App() {
  const [inputText, setInputText] = useState('');
  const styleCss = { margin: '20px', padding: '20px', fontSize: '30px' };

  async function aBtnClick() {
    const data = await axios.get(encodeURI(baseUrl + '/hello'));
    console.log('a', data);
  }
  async function bBtnClick() {
    const data = await axios.post(baseUrl + '/bye');
    console.log('b', data);
  }
  async function cBtnClick() {
    const data = await axios.post(baseUrl + '/hi');
    console.log('c', data);
  }
  async function dBtnClick() {
    const body = {
      text: inputText,
    };
    const data = await axios.post(baseUrl + '/text', body);
    console.log('d', data);
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <button style={styleCss} onClick={aBtnClick}>
        A
      </button>
      <button style={styleCss} onClick={bBtnClick}>
        B
      </button>
      <button style={styleCss} onClick={cBtnClick}>
        C
      </button>
      <input
        label="text input"
        style={{ margin: '20px', padding: '20px' }}
        value={inputText}
        onChange={(e) => handleChange(e)}
      ></input>
      <button style={styleCss} onClick={dBtnClick}>
        D
      </button>
      <div style={{ width: '300px', height: '300px', border: '1px solid' }}>
        {' '}
      </div>
    </div>
  );
}

export default App;

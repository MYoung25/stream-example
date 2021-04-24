import React, { useState }  from 'react'
import Axios from 'axios'
import './App.css';

function App() {
  const [ response, setResponse ] = useState('Make request...')


  async function makeRequest () {
    const res = await Axios.get('http://localhost:3000/', {
      responseType: 'stream'
    })
    console.log(res.data)
  }


  return (
    <div className="App">
      <main>
        <button onClick={() => {
          makeRequest()
        }}>
          Click here to make a request
        </button>
        <div>
          { response }
        </div>
      </main>
    </div>
  );
}

export default App;

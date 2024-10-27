import { useEffect } from 'react';
import './App.css';
import API from './Service/apis';

function App() {

  useEffect(() => {
    API.get('/apis')
    .then(res => console.log(res.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to eGwala App</h1>
      </header>
    </div>
  );
}

export default App;

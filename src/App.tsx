import React, {useState} from 'react';
import Dummy from './Dummy'
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
	const [ state ] = useState(0)
  return (
    <div className="App">
			<Dummy />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
					{state}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

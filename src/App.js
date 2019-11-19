import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LibraryFloor from "./containers/LibraryFloor";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
	<LibraryFloor/>
    </div>
  );
}

export default App;

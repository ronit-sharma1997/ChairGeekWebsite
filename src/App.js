import React from 'react';
import './App.css';
import LibraryFloor from "./containers/LibraryFloor";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
    {/*  <h1>Hello ChairGeek</h1>*/}
	{/*<h2> sup boys </h2>*/}
	<LibraryFloor/>
    </div>
  );
}

export default App;

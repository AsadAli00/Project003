import React from 'react';
import './App.css';
import Hello from './Hello.js';


function App({name,age}) {
  return <div> Hello From App.js Updtaed {name} Age = {age+10} <br/> <Hello firstname = {name}> </Hello> 
    
    </div>
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import { Form } from './components/Form/Form.jsx';
function App() {
   
  return (
    <div className="app">
      <div className='container'>
      <h1>It's Work</h1>
      
      <Switch>
         
        <Route path = {'/form'} ><Form/> </Route>
        </Switch>
        <button   className="bth">Закрыть</button>
        </div>
        </div>
  );
}

export default App;

// <Header/> onClick = {CloseEvent} <Route index elements = {<ProductList/>}/>
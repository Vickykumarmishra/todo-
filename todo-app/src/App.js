import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <center><div className="App" style={{border:'0.1rem solid green',margin:'1rem'}}>
        <h1 style={{marginTop:"2rem", marginBottom:'2rem',color:'green'}}>Todo App</h1>
        <TaskInput />
        <TaskList />
      </div> </center>
      <Footer></Footer>
    </Provider>
  );
}

export default App;

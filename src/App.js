import './App.css';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MakeUser from './components/MakeUser';
import MakeTasks from './components/MakeTasks';


function App() {

  const [users, setusers] = useState([])
  const [todos, settodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((r) => r.json())
      .then((data) => setusers(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/todos')
      .then((r) => r.json())
      .then((data) => settodos(data))
  }, [])

  const us = [...users]
  const tds = [...todos]

 

  return (
    
      <>        
        <Header />
        <NavBar />
        
        <Routes>
          <Route path ="/" element={<MakeTasks us={us} tds={tds} std={settodos} />} /> 
          <Route path= "/search" element={<Search />} />
          <Route path="/newUser" element={<MakeUser users={us} setusers={setusers} />} />  
        </Routes> 
        <Footer/>     
             
      </>       
  );
}

export default App;

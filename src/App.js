import './App.css';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MakeUser from './components/MakeUser';
import MakeTasks from './components/MakeTasks';
import Home from './components/Home';


function App() {

  const [users, setusers] = useState([])
  const [todos, settodos] = useState([])
  const [user, setUser] = useState({})
  const [utodos, setUtodos] = useState([])

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

  function handleDelete(id){
    const newTodos = todos.filter((t) => t.id !== id)
    settodos(newTodos)
  }

  function handleComplete(info){
    let completeTodo = todos.find((t) => t.id === info.id)
    completeTodo = info
    let leftTodos = todos.filter((t) => t.id !== info.id)
    settodos([...leftTodos, completeTodo])    
  }

  function handleCreateTask(info){
    settodos([...todos, info])
  }

 

  return (
    
      <>        
        <Header />
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/todos" element={<MakeTasks us={us} tds={tds} std={settodos} handD={handleDelete} handC={handleComplete} handM={handleCreateTask} />} /> 
          <Route path= "/todos/search" element={<Search us={us} std={settodos} handD={handleDelete} handC={handleComplete} user={user} setUser={setUser}utodos={utodos} setUtodos={setUtodos}/>} />
          <Route path="/user/new" element={<MakeUser users={us} setusers={setusers} />} />  
        </Routes> 
        <Footer/>     
             
      </>       
  );
}

export default App;

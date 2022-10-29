import './App.css';
import SignIn from './components/SignIn';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MakeUser from './components/MakeUser';


function App() {
  const [showSite, setShowSite] = useState(false)
  const [users, setusers] = useState([])
  const [todos, settodos] = useState([])
  const [currentUser, setcurrentUser] = useState({})

  function usesetcurrentUser(signedin){
    setcurrentUser(users.find((u) => u.name === signedin))
  }
  function useSetShowSite(){
    setShowSite(!showSite)
  }

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
  let userInfo
  let role
  if(showSite){
    userInfo = us.find((u) => u.name === currentUser)
    role = userInfo.role
  } else {
    userInfo = {}
    role = "none"
  }
  

  function handleComplete(id, data){
    let upd = tds.filter((t) => t.id !== id ) 
    // eslint-disable-next-line  
    upd = [...upd, data]
    settodos([...upd])
  }


  return (
    
      <>        
        <Header />
        <NavBar ss={showSite} scu={setcurrentUser} sss={setShowSite} />
        
        <Routes>
          <Route path ="/" element={<SignIn show={useSetShowSite} classes={showSite} scu={usesetcurrentUser} us={users} tds={tds} uss={us} cu={currentUser} uui={handleComplete} handcom={handleComplete} std={settodos} todos={todos} rol={role} />} /> 
          <Route path= "/search" element={<Search show={showSite} setcurrentUser={setcurrentUser}/>} />
          {currentUser.role === "Owner" ? <Route path="/newUser" element={<MakeUser users={us} setusers={setusers}/>} /> : null}  
        </Routes> 
        <Footer/>     
             
      </>       
  );
}

export default App;

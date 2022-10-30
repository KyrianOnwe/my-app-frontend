import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MakeUser({ users, setusers, role }) {
    const [user, setUser] = useState({
        name: "",
        role: "",
        password: "Yoyoyo",
        email: "",        
    })

    function createUser(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value,
          });
    }

    function resetUserForm(){
        setUser({
            name: "",
            role: "",
            password: "Yoyoyo",
            email: "",        
        })
    }
    const hist = useNavigate()

    useEffect(() => {
        if(role !== "Owner"){
          hist("/")
        }
      }, [role, hist])

    function submitUser(e){
        e.preventDefault()
        fetch(("http://localhost:9292/users/post"), {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then((r) => r.json())
        .then((data) => setusers([...users, data]))
        .then(() => resetUserForm())
    }

  return (
    <div className={role === "Owner"|| role === "Adminstrator"? "tasks-div":"hidden"}>        
        <form className="tasks-holder" onSubmit={submitUser}>
            <input type="text" name="name" placeholder="User Name" value={user.name} onChange={createUser} />
            <input type="text" name="role" placeholder="User's Role" value={user.role} onChange={createUser} />
            <input type="text" name="email" placeholder="Email address" value={user.email} onChange={createUser} />
            {/* <input type="text" name="assigned_by" placeholder="Assigned by" defaultValue={cu} /> */}
            <button type="submit">Done!</button>
        </form>
</div>
  )
}

export default MakeUser
import React, { useState } from 'react'
import MakeTasks from './MakeTasks'
import TasksContainer from './TasksContainer';

const SignIn = ({ show, classes, scu, us, std, tds, uss, cu, uui, handcom, todos, rol }) => {
    const [userName, setUserName] = useState("")
    const [password, acceptPassword] = useState('')
    const usersList = us.map((u) => u.name)    

    function useSetUN(e){
        setUserName(e.target.value)
    }

    function submitForm(e){
        e.preventDefault()
        if (usersList.includes(userName)){
            let logger = us.find((u) => u.name === userName)
            if(logger.password === password){
                show()
                scu(userName)
                setUserName("")
                acceptPassword("")
            } else {
                setUserName("")
                acceptPassword("")
                alert("Authentication Failed!")
            }
            
        } else {
            setUserName("")            
            acceptPassword("")
            alert("You are not a user")
        }
    }

    function useAP(e){
        acceptPassword(e.target.value)
    }
  return (
    <div>
    <div className={!classes? "sign_in_form" : "hidden"}>
        <form className='sign-in' onSubmit={submitForm}>
            <input type="text" placeholder="User Name" value={userName} onChange={useSetUN}/>
            <input type="text" placeholder="Password" value={password} onChange={useAP}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
    <MakeTasks show={classes} cu={cu} us={uss} std={std} todos={todos} role={rol}/>
    <TasksContainer tds={tds} show={classes} us={uss} setT={std} role={rol} cu={cu} uui={uui} handcom={handcom} />  
    </div>
  )
}

export default SignIn
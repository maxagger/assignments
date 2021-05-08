import signin from './signin.css'
import {useHistory, Link, Redirect} from 'react-router-dom'
import {useState} from 'react'

function Signin (){
    let history =useHistory();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    var myname={name:"maxwell", age: 35}
    var myname2= [{ name:"samuel", age:47}]

    function signin(){
        if (( username == "maxwell") && (password == "agger")){
            history.push('/dashboard')
        }
            else {
                alert( 'wrong username or password')
            }
        }

    

    function updateUsername(event){
        console.log(event.target.value);
        setUsername(event.target.value)

    }
    function updatePassword(event){
        console.log(event.target.value  );
        setPassword(event.target.value)

    }

    
         
   

    /*function welcome (){
        history.push('dashboard')
        
    }*/
    return (
   <div className="main">

<form className="forms"> 
<h2> <em>LOGIN</em> </h2>
<br />
<input onChange={updateUsername} className="username" type="text" name="username" value={username} placehoder="username"/>

<br />
<input onChange={updatePassword} className="password" type="password" name="password"  value={password}  placeholder="password" />
 < br />
 <span><button className="buttons" onClick={signin}> Log in</button></span> 
 <Redirect to='/Signup'><a href="#"> sign up</a><span></span></ Redirect>

</form>




   </div>

    )
}
export default Signin;
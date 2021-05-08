import Dashboardcss from  './dashboard.css'
import {useState} from 'react'



function Dashboard(){

    var name2="state management"
    

    const [name1, setName] = useState ("state management")
    setName="just do it"


    
    return (
        <div>
           <p> {name1} </p>
           <button onClick={name1}> click me </button>
           <p> {setName} </p>
        </div>
    )

}
export default Dashboard;
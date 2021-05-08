import Signin from './pages/signin/Signin'
import Dashboard from './pages/dashboard/Dashboard'
import Signup from  './pages/signup/Signup'
import {Switch, Route} from 'react-router-dom'
import Component1 from './components/component1'
import Component2 from './components/component2'
import Component3 from './components/component3'
import Component5 from './components/component5'
import Component6 from './components/component6'
import Component7 from './components/component7'
import Component8 from './components/component8'
import Component9 from './components/component9'
import Component10 from './components/component10'

function App() {
  return (
    
   /* <Switch>
      <Route exact path='/' component={Signin} />
      <Route exact path='/Signup' component={Signup} />
      <Route exact path='/Dashboard' component={Dashboard} />
      

      
    </Switch>*/
    <div>
      <Component1/>
      <Component2 />
      <Component3 />
      <Component5 />
      <Component6/>
      <Component6/>
      <Component7/>
      <Component8/>
      <Component9/>
      <Component10/>
    
    </div>
    
  
  )
}

export default App;

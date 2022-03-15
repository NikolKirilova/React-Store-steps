import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, UserProfile, AuthForm } from './components'
import AuthContext from './context/auth_context'
import { Redirect } from 'react-router-dom'

import { Home, Products, SingleProduct,About,Cart,Error,Checkout } from './pages'
import StepTwoCheckout from './pages/StepTwoCheckout'

 
function App() {

  const authCtx = useContext(AuthContext)
  return (
  <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      {!authCtx.isLoggedIn && (<Route path='/auth'>
          <AuthForm />
        </Route>
        )}
        <Route path='/profile'>
      {authCtx.isLoggedIn && <UserProfile />}
      {!authCtx.isLoggedIn && <Redirect to='/auth'/>    }       
        </Route>
       
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/cart'>
        < Cart/>
      </Route>
      <Route exact path='/products'>
        < Products/>
      </Route>
      <Route exact path='/products/:id' children={<SingleProduct/>} />
      <Route exact path='/checkout'>
        <Checkout /> 
      </Route>
      <Route exact path='/step-two'>
        <StepTwoCheckout /> 
      </Route>
      <Route  path='*'>
        <Error />
      </Route>
       
    </Switch>
    <Footer />
    
  </Router>
  )
}
export default App

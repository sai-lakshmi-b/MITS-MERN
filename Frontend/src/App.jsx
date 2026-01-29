import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Hook from './Hooks/Hook'
import UseRef from './Hooks/UseRef'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { Route, Routes } from 'react-router-dom'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
import Contacts from './pages/contacts'
const App = () => {
  const name = "Vikraam";   // ✅ DEFINE NAME HERE

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home name={name} />} />
        <Route path='/about' element={<About name={name} />} />
        <Route path='/contact' element={<Contacts name={name} />} />
        <Route path='/service' element={<Service name={name} />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/hook' element={<Hook />}>
          <Route path='usestate' element={<UseState />} />
          <Route path='useeffect' element={<UseEffect />} />
          <Route path='useeffectapi' element={<UseEffectApi />} />
          <Route path='useref' element={<UseRef />} />
          <Route path='usereducer' element={<UseReducer />} />
          <Route path='usememo' element={<UseMemo/>} />
          <Route path='UseCallback' element={<UseCallback/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
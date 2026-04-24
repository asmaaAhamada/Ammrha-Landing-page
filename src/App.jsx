import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Who from './components/page/ApparPages/home/Who-We-Are'
import Public from './components/page/ApparPages/home/public'
import AboutUs from './components/page/ApparPages/ABOUT/AbouteUs'
import Join from './components/page/ApparPages/comuncate/comunty'
import JOIN_US from './components/page/ApparPages/join/Join-Us'
import Details from './components/page/ApparPages/home/keep/detail/details'

import '../src/index.css'



export default function App({toggleMode, mode}){
 
  return (
    <>

       <Routes>

    {/* <Route path="/login" element={<Login />} />
    <Route path="/google/callback" element={<Login_Google />} /> */}

    {/* <Route path="/sighn" element={<SignUp />} /> */}
{/* //////////////token//////////////// */}
      {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/" element={<Layout toggleMode={toggleMode} mode={mode}/>}>
<Route index element={<Public />} />
    <Route path="/" element={<Public />} />

    <Route path="/about-us" element={<AboutUs />} />
<Route path="/details/:id" element={<Details/>} />
      <Route path="/contact" element={<Join />} />
 <Route path="/Join" element={<JOIN_US />} /> 



</Route>
        {/* </Route> */}
     
</Routes> 

    </>
  )
}
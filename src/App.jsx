import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './components/page/HomePage'
import Who from './components/page/Who-We-Are'
import Join from './components/page/Join-Us'
import Public from './components/page/public'





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

    <Route path="/about" element={<Who />} />
{/* <Route path="/Continue" element={<Continue />} /> */}
      <Route path="/contact" element={<Join />} />

        {/* <Route path="/conect" element={<ConectPage />} /> */}


</Route>
        {/* </Route> */}
     
</Routes> 

    </>
  )
}
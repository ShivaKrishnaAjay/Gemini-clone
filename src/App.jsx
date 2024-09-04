import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/Main/Main'
function App() {
 
  return (
    <>
      <Sidebar></Sidebar>
      <Main></Main>
    </>
  )
}

export default App

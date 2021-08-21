import React from 'react'
import GridContainer from './Components/GridContainer/GridContainer'
import Title from './Components/Title/Title'
import AppBar from './Components/AppBar/AppBar'
import Background from './Components/Background/Background'

function App(){
  return(
    <>
      <div className = 'divContainer'>
        <GridContainer />
        <Title />
        <Background />
      </div>
      <AppBar />
    </>
  )
}

export default App

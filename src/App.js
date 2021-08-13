import React from 'react'
import GridContainer from './Components/GridContainer/GridContainer'
import Title from './Components/Title/Title'
import Content from './Components/Content/Content'
import Icons from './Components/Icons/Icons'
import AppBar from './Components/AppBar/AppBar'
import Card from './Components/Card/Card'

function App(){
  return(
    <>
    <div className = 'divContainer'>
      <GridContainer />
      <Title />
      <Content />
      <Icons />
      <Card />
    </div>
      <AppBar />
    </>
  )
}

export default App

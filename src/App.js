import React from 'react'
import Title from './Components/Title/Title'
import GridContainer from './Components/GridContainer/GridContainer'
import AppBar from './Components/AppBar/AppBar'
import Content from './Components/Content/Content'
import Icons from './Components/Icons/Icons'

function App(){
  return(
    <>
      <GridContainer />
      <Title />
      <Content />
      <Icons />
      <AppBar />
    </>
  )
}

export default App;

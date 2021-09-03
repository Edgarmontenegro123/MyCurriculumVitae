import React from 'react'
import Content from '../Content/Content'
import Icons from '../Icons/Icons'
import ListItemContainer from '../ListItemContainer/ListItemContainer'
import './Background.css'

export default function Background(){
    return(
        <div className ='hero'>
          <Content /> 
          <Icons />
          <ListItemContainer />
          <div className ='hero__title'></div>
          <div className ='cube'></div>
          <div className ='cube'></div>
          <div className ='cube'></div>
          <div className ='cube'></div>
          <div className ='cube'></div>
          <div className ='cube'></div>
        </div>
    )
}

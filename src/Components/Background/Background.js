import React from 'react'
import Content from '../Content/Content'
import Icons from '../Icons/Icons'
import ListItemContainer from '../ListItemContainer/ListItemContainer'
import './Background.css'

export default function Background(){
    return(
        <div class="hero">
          <Content /> 
          <Icons />
          <ListItemContainer />
          <div class="hero__title"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
    )
}

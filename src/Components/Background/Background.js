import React from 'react'
import Content from '../Content/Content'
import Icons from '../Icons/Icons'
import Card from '../Card/Card'
import './Background.css'

export default function Background(){
    return(
        <div class="hero">
          <Content /> 
          <Icons />
          <Card />
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

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    logosContainer:{
        color: 'darkgrey', 
        display: 'flex', 
        justifyContent: 'space-around', 
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            marginRight: '20%',
            marginTop: '15%'
          },
          /* [theme.breakpoints.down('sm')]: {
            width:'100%',
            marginTop: '5%'
          }, */
          [theme.breakpoints.down('lg')]:{
            width:'100%',
            marginTop: '2%'
          }
    },
    divLogo:{
        display: 'flex', 
        flexDirection: 'column'
    }, 
    balance:{
        marginLeft: '-4%'
    },
    extra:{
        [theme.breakpoints.up('md')]:{
            display: 'flex'
          }       
    }
}))

export default function Icons(){
    const classes = useStyles()

    return(
        <div className = {classes.extra}>
            <div className = {classes.logosContainer}>
                <div className = {classes.divLogo}>
                    <i style = {{fontSize: '2rem', textAlign: 'center'}} class="fab fa-html5"></i>HTML5
                </div>
                <div className = {classes.divLogo}>
                    <i style = {{fontSize: '2rem', textAlign: 'center'}} class="fab fa-css3-alt"></i>CSS3
                </div>
                <div className = {classes.divLogo}>
                    <i style = {{fontSize: '2rem', textAlign: 'center'}} class="fab fa-js-square"></i>JavaScript
                </div>
            </div>
            <div className = {classes.logosContainer} style = {{marginLeft: '-3%'}}>
                <div className = {classes.divLogo}>
                    <i style = {{fontSize: '2rem', textAlign: 'center'}} class="fab fa-react"></i>ReactJS
                </div>
                <div className = {classes.divLogo}>
                    <i style = {{fontSize: '2rem', textAlign: 'center'}} class="fab fa-node"></i>NodeJS
                </div>
                <div className = {classes.divLogo}>
                    <i style = {{fontSize: '2rem', textAlign: 'center'}} class="fab fa-git-square"></i>Git
                </div>
            </div>
        </div>
    )
}

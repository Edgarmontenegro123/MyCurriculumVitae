import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import 'font-awesome/css/font-awesome.min.css';
import './Icons.css'

const useStyles = makeStyles((theme) => ({
    logosContainer:{
        color: 'darkgrey', 
        display: 'flex', 
        justifyContent: 'space-around', 
        widht: '100%',
        marginTop: '10%',
         [theme.breakpoints.down('xs')]:{
            marginTop: '10%',
            marginBottom: '5%',
            justifyContent: 'space-evenly',
            textAlign: 'center'     
          },
        [theme.breakpoints.up('sm')]:{
            marginTop: '5%',
           justifyContent: 'space-evenly',
           textAlign: 'center',        
           fontSize: '1.5rem'

          },
        [theme.breakpoints.up('md')]:{
            marginTop: '3%',
            fontSize: '1.5rem'
          },
        [theme.breakpoints.up('lg')]:{
            marginTop: '2%',
            fontSize: '1.5rem',
            textAlign: 'center'
        }
    },
    divLogo:{
        display: 'flex', 
        flexDirection: 'column'
    }, 
    /* balance:{
        marginLeft: '-4%'
    }, */
    /* extra:{
        [theme.breakpoints.up('md')]:{
            display: 'flex'
          }       
    } */
}))

export default function Icons(){
    const classes = useStyles()

    return(
        <div className = {classes.extra}>
            <div className = {classes.logosContainer}>
                <div className = {classes.divLogo}>
                    <i className="fab fa-html5"></i>HTML5
                </div>
                <div className = {classes.divLogo}>
                    <i className="fab fa-css3-alt"></i>CSS3
                </div>
                <div className = {classes.divLogo}>
                    <i className="fab fa-js-square"></i>JS
                </div>
            </div>
            <div className = {classes.logosContainer}>
                <div className = {classes.divLogo}>
                    <i className="fab fa-react"></i>React
                </div>
                <div className = {classes.divLogo}>
                    <i className="fab fa-node"></i>Node
                </div>
                <div className = {classes.divLogo}>
                    <i className="fab fa-git-square"></i>Git
                </div>
            </div>
        </div>
    )
}

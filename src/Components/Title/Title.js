import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Divider} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    divContainer:{
        color: 'whitesmoke', 
        marginTop: '5%',
        marginLeft: '31%', 
        position: 'absolute',
        [theme.breakpoints.down('xs')]:{
            width:'10rem',
            marginTop: '5%',
            marginLeft: '40%',
            top: 0,
            fontSize: '0.5rem'
          },
        [theme.breakpoints.up('sm')]:{
            width:'20rem',
            marginTop: '5%',
            marginLeft: '35%',
            top: 0,
            fontSize: '0.8rem'
          },
        [theme.breakpoints.up('lg')]:{
        width:'25rem',
        marginLeft: '20%',
        fontSize: '1rem',
        top: -40
        }
    }
}))

export default function Title(){
    const classes = useStyles()
    let p = '<'
    let q = '/>'
    
    return(
        <>  
            <div className = {classes.divContainer}>
                <h1>Hola, mi nombre es <strong>Edgar</strong>!</h1>
                <Divider />
                <h2><stronge>{p}</stronge>FullStack Web Developer <stronge>{q}</stronge></h2>
                <Divider />
            </div>          
        </>
    )
}

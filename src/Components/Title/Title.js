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
       /*  [theme.breakpoints.up('lg')]:{
        width:'25rem',
        marginLeft: '40%',
        fontSize: '2rem',
        top: -10
        } */
    }
}))

export default function Title(){
    const classes = useStyles()
    
    return(
        <>  
            <div className = {classes.divContainer}>
                <h1>Hola, mi nombre es Edgar!</h1>
                <Divider />
                <h2>FullStack Web Developer</h2>
                <Divider />
            </div>          
        </>
    )
}
